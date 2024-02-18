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
      if (firstCoupon === 'NEW15') {
        const discountPrice = document.getElementById('discount-container');
        discountPrice.classList.remove('hidden');
      }
    });
  }
});
