var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM D'));

// function with event listener and change time slot color
function getTime (event) {
    var currentHour = dayjs().format('H');
    var timeBlock = $('.description');
    console.log(currentHour)
    
    for (var i = 9; i < 18; i++) {
        var state;
        if (currentHour == i) {
            state = 'present'
        } else if (currentHour < i) {
            state = 'future'
        } else {
            state = 'past'
        }
        var localData = localStorage.getItem(`hour-${i}`);
        var displayHour = dayjs().startOf('day').add(i, 'hour').format('ha')
    

    var newDiv = `
    <div class="time-block" id="${i}">
      <section class="row" id="hour-${i}">
        <p class="hour">${displayHour}</p>
        <textarea class="description ${i} ${state}">${localData ? localData : ''}</textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      </section>
    </div>`;
    $('.time').append(newDiv);

    }

    // this event listener is setting time to get the sibling element which is textarea and its value
    // the userInput is getting the parent and added an id
    // this is starting at the button since that's what it is listening for so we traverse from there
    $('.saveBtn').on('click', function () {
        var userInput = $(this).siblings('textarea').val();
        var time = $(this).parent().attr('id');
        localStorage.setItem(`${time}`, userInput);
    })
}

getTime();