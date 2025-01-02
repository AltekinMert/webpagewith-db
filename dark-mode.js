	// JavaScript to toggle dark mode
	const toggle = document.getElementById('darkmode-toggle');
  const newtoggle= document.getElementById('new-darkmode');
	const content = document.querySelector('.content');
  const modalcontent = document.querySelector('.modal-content');
  const kitapoku = document.querySelector('.kitap-oku');
  const spoticlass = document.querySelector('.playlist-class');
  const quotes = document.querySelector('.quotes');
  const container3_new = document.querySelector('.container3');
  const commentmodal = document.querySelector('.comment-modal');
  const nextepisode2 = document.querySelector('.next-episode');

	toggle.addEventListener('change', () => {
		content.classList.toggle('dark-mode');
    customDropdown.classList.toggle('dark-mode');
    kitapoku.classList.toggle('dark-mode');
    spoticlass.classList.toggle('dark-mode');
    document.querySelectorAll('.quotes').forEach(quote => quote.classList.toggle('dark-mode'));
    container3_new.classList.toggle('dark-mode');
    commentmodal.classList.toggle('dark-mode');
    nextepisode2.classList.toggle('dark-mode');
	});
  newtoggle.addEventListener('change', () => {
		content.classList.toggle('dark-mode');
    customDropdown.classList.toggle('dark-mode');
    kitapoku.classList.toggle('dark-mode');
    spoticlass.classList.toggle('dark-mode');
    document.querySelectorAll('.quotes').forEach(quote => quote.classList.toggle('dark-mode'));
    container3_new.classList.toggle('dark-mode');
    commentmodal.classList.toggle('dark-mode');
    nextepisode2.classList.toggle('dark-mode');
    toggle.click();
	});
