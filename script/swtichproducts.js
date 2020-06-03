function switchProduct(productContainerType){
  const products = $(`.${productContainerType} div.products`);
  const nextBtn = $(`.${productContainerType} .nextBtn`);
  const prevBtn = $(`.${productContainerType} .prevBtn`);

  nextBtn.click(function(){
      let curProducts = products.filter('.on')
      let nextProducts = curProducts.index() < products.length  ? curProducts.next() : products.first();
      $(nextProducts)
        .addClass('on')
        .siblings('.on')
        .removeClass('on');
  }) 
  prevBtn.click(function(){
      let curProducts = products.filter('.on')
      let prevProducts = curProducts.index() > 1  ? curProducts.prev() : products.last();
      $(prevProducts)
        .addClass('on')
        .siblings('.on')
        .removeClass('on');
  }) 
};
switchProduct('favorite');
switchProduct('makeup');
switchProduct('skincare');
