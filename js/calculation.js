// d-1
document.getElementById('donate-btn1')
    .addEventListener('click', function(event){
        event.preventDefault();
        const donateMoney = getInputValuById('donate-money1');
        
        const balance = getTextValuById('account-balance');

        const donation = getTextValuById('get-money1')
        if(donateMoney <= balance && !isNaN(donateMoney)){
            const newBalance = balance - donateMoney;

            const donateBalance = donation + donateMoney;

            document.getElementById('account-balance').innerText = newBalance;
            document.getElementById('get-money1').innerText = donateBalance;
// history added
            const div = document.createElement('div');
            div.classList.add('border-[1px]');
            div.classList.add('p-[15px]');
            div.innerHTML=`<p class="font-bold">${donateMoney} Taka is Donated for Flood at Noakhali, Bangladesh</p>
            <p>Date: ${new Date().toLocaleDateString()}</p>
            `
        document.getElementById('history-container').appendChild(div);

        showModal();
        }

        else{
            alert('Please Try again')
        }
    })
// d-2

document.getElementById('donate-btn2')
    .addEventListener('click', function(event){
        event.preventDefault();
        const donateMoney = getInputValuById('donate-money2');
        
        const balance = getTextValuById('account-balance');

        const donation = getTextValuById('get-money2')
        if(donateMoney <= balance && !isNaN(donateMoney)){
            const newBalance = balance - donateMoney;

            const donateBalance = donation + donateMoney;

            document.getElementById('account-balance').innerText = newBalance;
            document.getElementById('get-money2').innerText = donateBalance;

            // history added
            const div = document.createElement('div');
            div.classList.add('border-[1px]');
            div.classList.add('p-[15px]');
            div.innerHTML=`<p class="font-bold">${donateMoney} Taka is Donated for Flood Relief in Feni,Bangladesh</p>
            <p>Date: ${new Date().toLocaleDateString()}</p>
            `
        document.getElementById('history-container').appendChild(div);

        showModal();
        }

        else{
            alert('Not enough money')
        }
    })

// d-3

document.getElementById('donate-btn3')
    .addEventListener('click', function(event){
        event.preventDefault();
        const donateMoney = getInputValuById('donate-money3');
        
        const balance = getTextValuById('account-balance');

        const donation = getTextValuById('get-money3')

        if(donateMoney <= balance && !isNaN(donateMoney)){
            const newBalance = balance - donateMoney;

            const donateBalance = donation + donateMoney;

            document.getElementById('account-balance').innerText = newBalance;
            document.getElementById('get-money3').innerText = donateBalance;

            // history added
            const div = document.createElement('div');
            div.classList.add('border-[1px]');
            div.classList.add('p-[15px]');
            div.innerHTML=`<p class="font-bold">${donateMoney} Taka is Donated for Injured in the Quota Movement</p>
            <p>Date: ${new Date().toLocaleDateString()}</p>
            `
        document.getElementById('history-container').appendChild(div);

        showModal();
        }

        else{
            alert('Not enough money')
        }
    })

// toggle

document.getElementById('tg-donate')
    .addEventListener('click', function(){
        showSectionById('donate')
    })

    document.getElementById('tg-history')
    .addEventListener('click', function(){
        showSectionById('history')
    })

// active
document.getElementById('tg-donate')
    .addEventListener('click', function(){
        activeMode('tg-donate')
    })

    document.getElementById('tg-history')
    .addEventListener('click', function(){
        activeMode('tg-history')
    })

// close modal

document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('my_modal_1').classList.add('hidden'); // Hide modal
  });

//   Page change

document.getElementById('blog-btn')
  .addEventListener('click', function(){
    window.location.href = 'blog.html'
  })
// navbar

window.addEventListener('scroll', function(){
    if(window.scrollY>40){
        document.getElementById('navbar').classList.add('backdrop-blur-md');
        document.getElementById('nav-top').classList.remove('bg-[#F9F7F3]');
        document.getElementById('nav-btm').classList.remove('bg-white');


    }

    else{
        document.getElementById('navbar').classList.remove('backdrop-blur-md');
        document.getElementById('nav-top').classList.add('bg-[#F9F7F3]');
        document.getElementById('nav-btm').classList.add('bg-white');
    }
})
