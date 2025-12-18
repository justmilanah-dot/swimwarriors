// Back to Top button and simple UI behaviors
document.addEventListener('DOMContentLoaded', function(){
  const topBtn = document.getElementById('topBtn');
  window.addEventListener('scroll', function(){
    if(document.documentElement.scrollTop > 300) topBtn.style.display = 'block'; else topBtn.style.display = 'none';
  });
  window.topFunction = function(){ window.scrollTo({top:0,behavior:'smooth'}); };
});
