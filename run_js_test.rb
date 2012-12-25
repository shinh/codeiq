#!/usr/bin/env ruby

fn = ARGV[0]

system("ruby ~/wrk/caddy/caddy.rb -sq #{fn}")
code = File.read('out.js')

test = File.read("test_#{fn}")
test.sub!('%YOUR_CODE%', code)
test += %q(
  var origRes = origCode();
  var yourRes = yourCode();
  if (this.resConv) {
    origRes = this.resConv(origRes);
    yourRes = this.resConv(yourRes);
  }
  if (JSON.stringify(origRes) == JSON.stringify(yourRes)) {
    print("OK");
  } else {
    print("FAIL");
    print(yourRes);
  }
)

test_file = '/tmp/test.js'
File.open(test_file, 'w') do |of|
  of.print(test)
end
system("d8 #{test_file}")
