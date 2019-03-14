$(function(){

//Declare totals

	let $priceTotal = 0;
	let $totalTax = 0;
	let $itemTotal= 0;
	let $finalTotal = $priceTotal + $totalTax;
	let $discountTotal = 0;
	let $grandTotal=0;
	let $itemCount = 0;
	let $id =0;

//Form submit

	$('form').on('submit',function(e){

		e.preventDefault();

		formSubmit();

	});


	function formSubmit() {

		//Take form inputs and calculate discount and tax
		
		let $item = $('.item').val() || 'Item';
		let $price = parseInt($('.price').val()) || 0;
		let $discount = parseInt($('.discount').val())/100 || 0
		let $discountAmount = $price*$discount;
		let $discountedPrice = $price-($price*$discount);
		let $hst = ($discountedPrice*0.13);

		//Calculate totals

		$priceTotal = $price + $priceTotal;
		$totalTax = $hst + $totalTax;
		$itemTotal = $discountedPrice + $hst;
		$grandTotal= $itemTotal + $grandTotal;
		$discountTotal= $discountAmount + $discountTotal;
		$itemCount = $('.item_name').length + 1;
		$id = $id +1;
		
		//Remove item

		$('body').on('click', '.remove_item', function(e) {
			e.preventDefault();
		    $(this).closest('tr').remove();		
		});

		//Add row for item

		$('.invoice_row').after(
				`<tr id="item ${$id}">
					 <td> <a href="#" class="remove_item ${$id}"><i class="fas fa-minus-circle"></i></a></td>
				     <td class="item_name" scope="col">${$item}</td>
					 <td class="item_price" scope="col">${$price}</td>
					 <td class="item_discount" scope="col">$${$discountAmount} <p class='percentage'>(%${$discount*100} OFF)</p></td>
					 <td class="item_tax" scope="col">$${$hst}</td>
					 <td class="item_total" scope="col">$${$discountedPrice+($hst)}</td></tr>`);		
		
		// Update Totals row

		$('.total_items').html($itemCount);
		$('.discount_total').html('$' + $discountTotal);
		$('.total_price').html('$' + $priceTotal);
		$('.total_tax').html('$' + $totalTax);
		$('.grand_total').html('$' + $grandTotal);

		//Reset form

		$("input[type='text']").val("");

		}


});
