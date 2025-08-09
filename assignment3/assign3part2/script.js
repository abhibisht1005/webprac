function verifyStudent() {
  const idInput = document.getElementById('identifier');
  const id = idInput.value.trim();
  const resultBox = document.getElementById('result');


  if (!id) {
    alert('Please enter a valid Email or ID');
    return;
  }

  showSpinner(true);
  resultBox.innerHTML = ''; // Clear previous result

  // Simulate network delay
  setTimeout(() => {
    const student = {
      name: "John Doe",
      email: "john@example.com",
      mobile: "9876543210",
      domain: "Web Development",
      college: "Dummy University",
      start: "01 June 2024",
      duration: "1 Month",
      photo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAHBhAPBw4PDxUPEA8VEBgQDw8QDg8PFRMWFhcRFRMYHSgiGBolHRUVITEhJSktLi4uFx8zODcsNygtLisBCgoKDQ0NFQ0NFSsZFRkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQQFAgMH/8QAMRABAAEDAQMKBgIDAAAAAAAAAAECAxEEIUGBBRIiMTJhcZGhsRMzQlFy0SM0U8Hx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD6oAqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPK7qKbXanb9o6weozrmtqq7ERHrLym/XPXVPngGsMj4tUfVV5y7p1NdP1Tx2g1BRo10/XTHCcLtMxVGadvh1AkAAAAAAAAAAAAAAAAAAABFUxTGatmEqGvudKKY3bZ8QRqdXNc4t7I9ZVQUAAAAHdq7NmrNE/qXADWs3YvUZjjH2ejM0VfNvxH32NNAAAAAAAAAAAAAAAAAAAY92v4lyZnfPo1L84s1fjLJAAUAAAAAATRVza4mN0w2WK2YnMIJAAAAAAAAAAAAAAAAAB5an+vV+Mspr3ozaqjun2ZAACgAAAAAA1rE5s0/jHsyWvZjFmn8afZB2AAAAAAAAAAAAAAAAACtrbk27ccycZlnNDlCP4Y/KPaWeAAoAAAAAANHQ3JuUTz5zidnkzmhyfH8Mz3/wCoQWgAAAAAAAAAAAAAAAAAeOqp52nq8M+TLbMxmMTvZuq0/wADHNnOcg8AFAAAAAABqaSnm6envjPmpabT/HzmcYxxaVMc2mIjcgkAAAAAAAAAAAAAAAAABW11HOsZjdMTw6llFUc6MTvBjD0v2ptXMTw74eagAAAADuzb+LciI490Av6KjmWI79qwiIxGxKAAAAAAAAAAAAAAAAAAAACnyjHQpnvn2UV3lGejTHfMqSgAAAAt8ndurwj3VFrk6cXZj7x7SDQAQAAAAAAAAAAAAAAAAARMxTGapx4glTv63E4tRxn9F7WxGy1t756lGZzOZ3g6rrm5Oa5y5BQAAAATTVNFWaZwgBcs63Gy7Ge+P0uxOY2MZcs63Gy7HGP0gvDmiuK4zRMT4OgAAAAAAAAAABxduRapzXOPeVK5rpn5cY9ZBoPK5fpt9qqOG2WbXdqr7VUzx2eTgFy5rv8AHHn+lWu5NyenMy5AAAAFAAAAAAABBNNc0TmmZjwWreumPmRnw2SqANS3qaK+qceOx7MV1TcmjszMcQbAzretqp7fS9JXbN6m9HRnhvgHoAAAA4u3It0TNW71dqPKNW2mOIKt25N2vNf/AByCgAAAAAAAAAAAAAAAAAAAAmiqaKs0ziYQA1dPd+Nbzv3+L1Z2gqxex949YaKAAAz+UPmx4R7yAKoCgAAAAAAAAAAAAAAAAAAAAAD30X9iOPtLTBAAB//Z",
      assignments: [true, false, true, true],
      certificate: "#"
    };

    const html = `
      <div class="card">
        <img src="${student.photo}" alt="Photo" />
        <h3>${student.name}</h3>
        <p>Email: ${student.email}</p>
        <p>Mobile: ${student.mobile}</p>
        <p>Domain: ${student.domain}</p>
        <p>College: ${student.college}</p>
        <p>Start Date: ${student.start}</p>
        <p>Duration: ${student.duration}</p>
        <h4>Assignment Status</h4>
        <div class="assignment-status">
          ${student.assignments.map((done, i) => `<span>A${i + 1}: ${done ? '✅' : '❌'}</span>`).join('')}
        </div>
        <p>Status: Completed</p>
        <a href="${student.certificate}" target="_blank">View Certificate</a>
      </div>
    `;
    const fatal=`
    <div class="card">
      <p> data not found</p>
    </div>
    `
// created validation of email myself for valid data fetching
  function validateEmail() {
  const emailInput = document.getElementById('identifier');
  const id = emailInput.value;

  // A common regular expression for email validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailRegex.test(id)) {
    if(id!=student.email){
      resultBox.innerHTML = fatal;
      showSpinner(false);
      showToast('❌ Data not available in storage');
    }
    else{
      resultBox.innerHTML = html;
      showSpinner(false);
      showToast('✅ Dummy student data loaded.');
    }
  } else {
      resultBox.innerHTML = fatal;
      showSpinner(false);
      alert('Please enter a valid Email or ID');
  }
}
  validateEmail();
    
  }, 1200);
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.innerText = msg;
  toast.className = 'toast show';
  setTimeout(() => toast.className = 'toast', 3000);
}

function showSpinner(show) {
  document.querySelector('.spinner').style.display = show ? 'block' : 'none';
}


