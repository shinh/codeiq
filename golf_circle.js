/*
r="";for(y=-21;++y<20;r+="\n")for(x=-41;++x<40;)r+="-*"[x*x/4+y*y<225&1];return r;

r="";for(y=s=40;y+s;y-=2,r+="\n")for(x=s;x+s;)r+="-*"[x*x--+y*y<900&1];return r

r="";for(y=-21;++y<20;r+="\n")x=-41,r+=evalfor(x=-41;++x<40;)r+="-*"[x*x/4+y*y<225&1];return r;


r="";for(y=-21;++y<20;r+="\n")for(x=-41;++x<40;)r+="*-"[x*x/4+y*y>224|0];return r;

r="";for(x=y=-40;y<40;)r+=x>39?(x=-40,y+=2,"\n"):"*-"[x*x+++y*y>899|0];return r;


r="";x=-41;for(y=-40;y<40;)r+=++x>39?(x=-41,y+=2,"\n"):"*-"[x*x+y*y>899|0];return r;

r="";x=-41;for(y=-21;++x<40?(r+="*-"[x*x/4+y*y>224|0]):(r+="\n",x=-41,++y<20););return r;

r="";x=-41;for(y=-21;y<20;)r+=++x>39?x=-41,++y,"\n":"*-"[x*x/4+y*y>224|0];return r;

r="";for(a=-1;++a<3240;)x=a%81-40,y=(a/81|0)-20,r+="-*\n"[x>39?2:x*x/4+y*y<225&1];return r;


r="";for(s=x=y=-40;y+s;)r+=x+s?"*-"[y*y+x*x++>899|0]:(x=s,y+=2,"\n");return r;
r="";for(s=x=y=-40;y+s;)r+=x+s?y*y+x*x++>899?"*":"-":(x=s,y+=2,"\n");return r;
r="";for(s=x=y=-40;y+s;)r+=x+s?"*-"[y*y+x*x++>899|0]:(x=s,y+=2,"\n");return r
r="";for(s=x=y=-40;y+s;)r+=x+s?y*y+x*x++>899?"*":"-":(x=s,y+=2,"\n");return r

r="";for(s=x=y=40;y+s;)r+=x+s?"*-"[y*y+x*x-->899|0]:(x=s,y-=2,"\n");return r
*/
r="";for(s=x=y=40;y+s;)r+="*-\n"[x+s?y*y+x*x-->899|0:(x=s,y-=2,2)];return r

//r="";for(s=x=y=40;y+s;r+="*-\n"[d])d=x+s?y*y+x*x-->899|0:(x=s,y-=2,2);return r

