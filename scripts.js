document.addEventListener('DOMContentLoaded', function() {
    const zakatForm = document.getElementById('zakatForm');
    const paymentForm = document.getElementById('paymentForm');
    const donationForm = document.getElementById('donationForm');
    const fidyahForm = document.getElementById('fidyahForm');
    const paymentOptionsForm = document.getElementById('paymentOptionsForm');

    if (zakatForm) {
        zakatForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const wealth = parseFloat(document.getElementById('wealth').value);
            const zakatType = document.getElementById('zakatType').value;
            let zakatAmount;

            if (zakatType === 'maal') {
                zakatAmount = wealth * 0.025;
            } else {
                // Logic for other zakat types
                zakatAmount = 0;
            }

            document.getElementById('result').textContent = `Zakat yang harus dibayar: Rp ${zakatAmount.toFixed(2)}`;
        });
    }

    if (paymentForm) {
        paymentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const amount = parseFloat(document.getElementById('amount').value);

            if (amount < 10000) {
                alert('Jumlah minimum zakat adalah Rp 10.000');
                return;
            }

            window.location.href = 'payment.html';
        });
    }

    if (donationForm) {
        donationForm.addEventListener('submit', function(event) {
            event.preventDefault();
            window.location.href = 'payment.html';
        });
    }

    if (fidyahForm) {
        fidyahForm.addEventListener('submit', function(event) {
            event.preventDefault();
            window.location.href = 'payment.html';
        });
    }

    if (paymentOptionsForm) {
        paymentOptionsForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const paymentMethod = document.getElementById('paymentMethod').value;
            const paymentDetails = document.getElementById('paymentDetails');
            const paymentInfo = document.getElementById('paymentInfo');

            if (paymentMethod === 'bank') {
                paymentInfo.innerHTML = `
                    <p>Transfer Bank ke nomor rekening 123-456-789 a/n Lembaga Lumbung Amal</p>
                `;
                paymentDetails.classList.remove('hidden');
            } else if (paymentMethod === 'qris') {
                const qrisModal = new bootstrap.Modal(document.getElementById('qrisModal'));
                qrisModal.show();
                paymentDetails.classList.remove('hidden');
            }
        });
    }
});
