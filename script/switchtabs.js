$(function(){
  const tabs = $('.tabs div');
  const btns = $('.radioBtn div');
  tabs.click(function(){
    $(this).addClass('on').siblings('.on').removeClass('on');
  })
  btns.click(function(){
    $(this).addClass('on').siblings('.on').removeClass('on');
  });
  function switchTab(){
    let onTab = tabs.filter('.on')
    let nextTab = onTab.index() < tabs.length-1 ? onTab.next() : tabs.first();
    nextTab.click();
    let onBtn = btns.filter('.on')
    let nextBtn = onBtn.index() < btns.length-1 ? onBtn.next() : btns.first();
    nextBtn.click();
  } 
  let startSwitch = setInterval( switchTab , 2000);
  btns.hover(function(){
    if(startSwitch){
      clearInterval(startSwitch);
    }
    this.click();
    let btnIndex = $(this).index()
    let tab = tabs.filter(function(index){
      return index === btnIndex;
    })
    $(tab).click();

  }, function(){
     startSwitch = setInterval( switchTab , 2000);
  })
})
