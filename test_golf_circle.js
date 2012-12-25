function yourCode() {
  %YOUR_CODE%
}

function origCode() {
  r="";for(y=-21;++y<20;r+="\n")for(x=-41;++x<40;)r+="*-"[x*x/4+y*y>224|0];return r;
}
