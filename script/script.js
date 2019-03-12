$(function(){

	
//Total Default
	$('.total').html(0);


//Random Hex Generator



//Declare totals
	let $priceTotal = 0;
	let $taxTotal = $priceTotal*0.13;
	let $itemTotal= 0;
	let $finalTotal = $priceTotal + $taxTotal;
	let $tax = 0;
	let $discount = 0;


	function addDiscount(d){
		$priceTotal=$priceTotal-($priceTotal*(d/100));
	}
//
	function itemCount() {
			let $itemCount = $('.item_name').length;
		$('.total_items').html($itemCount);
	};


	function removeItem(row){
		$(row).hide();
	};


	$('.item_remove').on('click',function(){
		$(this).addClass('remove')()
	})


	$('form').on('submit',function(e){

		e.preventDefault();

		let $item = $('.item').val() || 'Item';

		let $price = parseInt($('.price').val()) || 0;
		let $discount = parseInt($('.discount').val()) || 0
		let $discountPercent = $discount/100;
		let $discountedPrice = $price-($price*$discountPercent);
		console.log($discount);

		

		$priceTotal = $price + $priceTotal;
		$tax = $price*0.13;
		$taxTotal = $taxTotal + $tax;
		$itemTotal = $priceTotal+$tax;
		$finalTotal=$priceTotal + $taxTotal;
		console.log($priceTotal);
		$('.price_total').html($priceTotal);
		$('.total_tax').html($taxTotal);
		$('.final_total').html($finalTotal);
		$('.total').html(`$${$finalTotal}`);


		$('.invoice_row').after(
				`<tr class="item_row">
					 <td class="item_remove"><i class="fas fa-minus-circle"></i></td>
				     <td class="item_name" scope="col">${$item}</td>
					 <td class="item_price" scope="col">$${$price}</td>
					 <td class="item_discount" scope="col">%${$discount}</td>
					 <td class="item_tax" scope="col">$${$price*0.13}</td>
					 <td class="item_total" scope="col">${$discountedPrice+($price*.13)}</td></tr>	`);		
		
		$('.price_total').val($priceTotal);
		$("input[type='text']").val("");
		itemCount();


});

});

