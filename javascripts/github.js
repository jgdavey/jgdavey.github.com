var github=function(){function r(r,e){var n=0,t="",a=$(r)[0];for(n=0;n<e.length;n++)t+='<li><a href="'+e[n].url+'">'+e[n].name+"</a><p>"+e[n].description+"</p></li>";a.innerHTML=t}return{showRepos:function(e){$.ajax({url:"https://api.github.com/users/"+e.user+"/repos",dataType:"json",error:function(){$(e.target+" li.loading").addClass("error").text("Error loading feed")},success:function(n){var t=[];if(n){for(var a=0;a<n.length;a++){var o=e.ignore&&-1!=$.inArray(n[a].name,e.ignore);e.skip_forks&&n[a].fork||o||t.push(n[a])}t.sort(function(r,e){var n=new Date(r.updated_at).valueOf(),t=new Date(e.updated_at).valueOf();return n===t?0:n>t?-1:1}),e.count&&t.splice(e.count),r(e.target,t)}}})}}}();