function scrollDownByBtn() {
  const scrollTo = document.getElementById('buy-ticket');
  scrollTo.scrollIntoView({ block: 'start', behavior: 'smooth' });
}
const seats = document.querySelectorAll('.seat-selector');
const seatArray = [];

for (const seat of seats) {
  const selectedSeat = seat;
  const array = [];
  selectedSeat.addEventListener('click', function () {
    array.push(selectedSeat);
    if (array.length > 1) {
      selectedSeat.removeEventListener();
    }
    if (seatArray.length === 3) {
      enableButtonById('apply-btn');
    }
    const seatCountElement = document.getElementById('seat-count');
    const seatCount = parseInt(seatCountElement.innerText);
    const totalSeatCount = seatCount + 1;
    if (totalSeatCount <= 4) {
      seatArray.push(selectedSeat);
      seatCountElement.innerText = totalSeatCount;
      setElementsById('price-list', selectedSeat.innerText);
      setBgColorByID(selectedSeat);
      setTextById('seats-left');
      setTotalPriceById('total-price');
      setTotalPriceById('grand-total');
    } else {
      alert("You can't buy more than 4 tickets!");
    }
    console.log('clicked');
  });
}

document.getElementById('coupon-input').addEventListener('keyup', function (e) {
  if (seatArray.length === 4) {
    const firstCoupon = e.target.value;
    document.getElementById('apply-btn').addEventListener('click', function () {
      const newCoupon = 'NEW15';
      if (firstCoupon === newCoupon && firstCoupon.length === 5) {
        console.log('coupon');
        document.getElementById('apply-btn').classList.add('hidden');
        document.getElementById('coupon-input').classList.add('hidden');
        const discountContainer = document.getElementById('discount-container');
        discountContainer.classList.remove('hidden');
        const element = parseFloat(
          document.getElementById('total-price').innerText
        );
        const discountPrice = document.getElementById('discount-price');
        discountPrice.innerText = element * (15 / 100);
        const grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = element - discountPrice.innerText;
        document.getElementById('apply-btn').disabled = true;
      } else if (firstCoupon === 'Couple 20') {
        document.getElementById('apply-btn').classList.add('hidden');
        document.getElementById('coupon-input').classList.add('hidden');
        const discountContainer = document.getElementById('discount-container');
        discountContainer.classList.remove('hidden');
        const element = parseFloat(
          document.getElementById('total-price').innerText
        );
        const discountPrice = document.getElementById('discount-price');
        discountPrice.innerText = element * (20 / 100);
        const grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = element - discountPrice.innerText;
        document.getElementById('apply-btn').disabled = true;
      }
    });
  }
});
document.getElementById('number-input').addEventListener('keyup', function (e) {
  const numberInputValue = e.target.value;
  if (seatArray.length > 0 && !isNaN(numberInputValue) === true) {
    enableButtonById('next-btn');
    console.log(seatArray.length);
  } else {
    document.getElementById('next-btn').disabled = true;
  }
});
