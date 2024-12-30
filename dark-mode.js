	// JavaScript to toggle dark mode
	const toggle = document.getElementById('darkmode-toggle');
	const content = document.querySelector('.content');
  const modalcontent = document.querySelector('.modal-content');
  const kitapoku = document.querySelector('.kitap-oku');
  const spoticlass = document.querySelector('.playlist-class');
  const quotes = document.querySelector('.quotes');
  const container3_new = document.querySelector('.container3');
  const commentmodal = document.querySelector('.comment-modal');

	toggle.addEventListener('change', () => {
		content.classList.toggle('dark-mode');
    customDropdown.classList.toggle('dark-mode');
    kitapoku.classList.toggle('dark-mode');
    spoticlass.classList.toggle('dark-mode');
    document.querySelectorAll('.quotes').forEach(quote => quote.classList.toggle('dark-mode'));
    container3_new.classList.toggle('dark-mode');
    commentmodal.classList.toggle('dark-mode');
	});