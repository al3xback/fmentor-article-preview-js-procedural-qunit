const createLayoutComponents = () => {
	const createCardEl = () => {
		const cardEl = document.createElement('article');
		cardEl.className = 'card';

		/* card image */
		const cardImageWrapperEl = document.createElement('div');
		cardImageWrapperEl.className = 'card__image';

		const cardImageInnerEl = document.createElement('div');
		cardImageInnerEl.className = 'card__image-inner';

		const cardImageEl = document.createElement('img');
		cardImageEl.width = 280;
		cardImageEl.height = 278;
		cardImageEl.src = './images/drawers.jpg';
		cardImageEl.alt = 'Drawers';

		cardImageInnerEl.appendChild(cardImageEl);

		cardImageWrapperEl.appendChild(cardImageInnerEl);

		/* card content */
		const cardContentEl = document.createElement('div');
		cardContentEl.className = 'card__content';

		/* card title */
		const cardTitleEl = document.createElement('h2');
		cardTitleEl.className = 'card__title';
		cardTitleEl.textContent =
			'Shift the overall look and feel by adding these wonderful touches to furniture in your home';

		/* card description */
		const cardDescriptionEl = document.createElement('p');
		cardDescriptionEl.className = 'card__desc';
		cardDescriptionEl.textContent =
			"Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.";

		/* card author */
		const cardAuthorEl = document.createElement('div');
		cardAuthorEl.className = 'card__author';

		const cardAuthorImageWrapperEl = document.createElement('div');
		cardAuthorImageWrapperEl.className = 'card__author-img-box';

		const cardAuthorImageEl = document.createElement('img');
		cardAuthorImageEl.className = 'card__author-img';
		cardAuthorImageEl.width = 40;
		cardAuthorImageEl.height = 40;
		cardAuthorImageEl.src = './images/avatar.jpg';
		cardAuthorImageEl.alt = 'Michelle Appleton';

		cardAuthorImageWrapperEl.appendChild(cardAuthorImageEl);

		const cardAuthorInfoEl = document.createElement('div');
		cardAuthorInfoEl.className = 'card__author-info';

		const cardAuthorNameEl = document.createElement('h3');
		cardAuthorNameEl.className = 'card__author-name';
		cardAuthorNameEl.textContent = 'Michelle Appleton';

		const cardAuthorPostDateEl = document.createElement('p');
		cardAuthorPostDateEl.className = 'card__author-post-date';
		cardAuthorPostDateEl.textContent = '28 Jun 2020';

		cardAuthorInfoEl.appendChild(cardAuthorNameEl);
		cardAuthorInfoEl.appendChild(cardAuthorPostDateEl);

		cardAuthorEl.appendChild(cardAuthorImageWrapperEl);
		cardAuthorEl.appendChild(cardAuthorInfoEl);

		/* card share */
		const cardShareEl = document.createElement('div');
		cardShareEl.className = 'card__share';

		const cardShareCheckboxEl = document.createElement('input');
		cardShareCheckboxEl.type = 'checkbox';
		cardShareCheckboxEl.name = 'toggle';
		cardShareCheckboxEl.id = 'share-toggle';
		cardShareCheckboxEl.className = 'card__share-checkbox';

		const cardShareBoxEl = document.createElement('div');
		cardShareBoxEl.className = 'card__share-box';

		const cardShareActionEl = document.createElement('div');
		cardShareActionEl.className = 'card__share-action';

		const cardShareActionTextEl = document.createElement('span');
		cardShareActionTextEl.className = 'card__share-action-txt';
		cardShareActionTextEl.textContent = 'Share';

		const cardShareActionButtonListEl = document.createElement('ul');
		cardShareActionButtonListEl.className = 'card__share-action-buttons';

		const shareActionButtons = ['facebook', 'twitter', 'pinterest'];

		for (const shareActionButton of shareActionButtons) {
			const cardShareActionButtonItemEl = document.createElement('li');

			const cardShareActionButtonItemLinkEl = document.createElement('a');
			cardShareActionButtonItemLinkEl.href = '#';
			cardShareActionButtonItemLinkEl.title = `Share on ${shareActionButton}`;

			const cardShareActionButtonItemLinkIconEl =
				document.createElement('i');
			cardShareActionButtonItemLinkIconEl.className = `icon-${shareActionButton}`;
			cardShareActionButtonItemLinkIconEl.ariaHidden = 'true';

			cardShareActionButtonItemLinkEl.appendChild(
				cardShareActionButtonItemLinkIconEl
			);

			cardShareActionButtonItemEl.appendChild(
				cardShareActionButtonItemLinkEl
			);

			cardShareActionButtonListEl.appendChild(
				cardShareActionButtonItemEl
			);
		}

		cardShareActionEl.appendChild(cardShareActionTextEl);
		cardShareActionEl.appendChild(cardShareActionButtonListEl);

		const cardShareToggleButtonEl = document.createElement('label');
		cardShareToggleButtonEl.htmlFor = 'share-toggle';
		cardShareToggleButtonEl.className = 'btn btn--icon btn--share-toggle';
		cardShareToggleButtonEl.innerHTML =
			'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"></svg>';

		const cardShareToggleButtonIconEl = document.createElementNS(
			'http://www.w3.org/2000/svg',
			'path'
		);
		cardShareToggleButtonIconEl.setAttribute('fill', 'currentColor');
		cardShareToggleButtonIconEl.setAttribute(
			'd',
			'M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z'
		);

		cardShareToggleButtonEl.firstElementChild.appendChild(
			cardShareToggleButtonIconEl
		);

		cardShareBoxEl.appendChild(cardShareActionEl);
		cardShareBoxEl.appendChild(cardShareToggleButtonEl);

		cardShareEl.appendChild(cardShareCheckboxEl);
		cardShareEl.appendChild(cardShareBoxEl);

		cardContentEl.appendChild(cardTitleEl);
		cardContentEl.appendChild(cardDescriptionEl);
		cardContentEl.appendChild(cardAuthorEl);
		cardContentEl.appendChild(cardShareEl);

		cardEl.appendChild(cardImageWrapperEl);
		cardEl.appendChild(cardContentEl);

		return cardEl;
	};

	/* header */
	const headerEl = document.createElement('header');

	const headerTitleEl = document.createElement('h1');
	headerTitleEl.className = 'sr-only';
	headerTitleEl.textContent = 'Article preview component';

	headerEl.appendChild(headerTitleEl);

	/* main */
	const mainEl = document.createElement('main');

	const mainContainerEl = document.createElement('div');
	mainContainerEl.className = 'container';

	const cardEl = createCardEl();

	mainContainerEl.appendChild(cardEl);

	mainEl.appendChild(mainContainerEl);

	/* footer */
	const footerEl = document.createElement('footer');

	const footerContainerEl = document.createElement('div');
	footerContainerEl.className = 'container';

	const footerTextEl = document.createElement('p');
	footerTextEl.textContent = 'Challenge by ';

	const footerTextLinkCreatorEl = document.createElement('a');
	footerTextLinkCreatorEl.href =
		'https://www.frontendmentor.io?ref=challenge';
	footerTextLinkCreatorEl.className = 'btn btn--link';
	footerTextLinkCreatorEl.textContent = 'Frontend Mentor';
	footerTextLinkCreatorEl.rel = 'noopener';
	footerTextLinkCreatorEl.target = '_blank';

	const footerTextLinkCoderEl = document.createElement('a');
	footerTextLinkCoderEl.href = 'https://github.com/al3xback';
	footerTextLinkCoderEl.className = 'btn btn--link';
	footerTextLinkCoderEl.textContent = 'al3xback';
	footerTextLinkCoderEl.rel = 'noopener';
	footerTextLinkCoderEl.target = '_blank';

	footerTextEl.appendChild(footerTextLinkCreatorEl);
	footerTextEl.append('. Coded by ');
	footerTextEl.appendChild(footerTextLinkCoderEl);

	footerContainerEl.appendChild(footerTextEl);

	footerEl.appendChild(footerContainerEl);

	return {
		headerEl,
		cardEl,
		mainEl,
		footerEl,
	};
};

export default createLayoutComponents;
