

function headerAnim() {
    const headerText = document.querySelectorAll('.header__text');
    const img = document.querySelector('.header__img');
    let time = 500;
    for (let i = 0; i < headerText.length; i++) {
        setTimeout(() => {
            headerText[i].style.visibility = 'visible';
            headerText[i].style.transform = 'translateY(0%)';
        }, time)
        time += 600;
    }
    setTimeout(() => {
        img.style.transform = ' translateX(0%)';
        img.style.visibility = 'visible';
    }, 2000)
}




headerAnim();








window.addEventListener('scroll', () => {
    let screenPosition = window.innerHeight;

    function sectionTitleAnim() {

        let sectionTitle = document.querySelectorAll('.section-title');
        let sectionTitleText = document.querySelectorAll('.section-title__text');

        for (let i = 0; i < sectionTitle.length; i++) {
            let contentPosition = sectionTitle[i].getBoundingClientRect().top / 0.9;


            if (contentPosition < screenPosition) {
                sectionTitle[i].classList.add('active');
                sectionTitleText[i].classList.add('active');
            }
            else {
                sectionTitle[i].classList.remove('active');
                sectionTitleText[i].classList.remove('active');
            }
        };
    }
    function timeLineAnim() {

        const clock = document.querySelectorAll('.clock');
        const clockFuture = document.querySelector('.clock-future');
        const timeLineText = document.querySelectorAll('.time-line__text');
        const timeLineTtitle = document.querySelectorAll('.time-line__title');
        const clockFuturePosition = clockFuture.getBoundingClientRect().top;
        let time = 500;
        for (let i = 0; i < clock.length; i++) {
            let contentPosition = clock[i].getBoundingClientRect().top;
            if (contentPosition < screenPosition) {
                setTimeout(() => {
                    clock[i].classList.add('active');
                    timeLineText[i].classList.add('active');
                    timeLineTtitle[i].classList.add('active');

                }, time)
                time += 500;
            }
            if (clockFuturePosition < screenPosition) {

                setTimeout(() => {
                    clockFuture.classList.add('active');
                    timeLineText[2].classList.add('active');
                    timeLineTtitle[2].classList.add('active');


                }, 1500)
            }

            /*    else {
                   clock[i].classList.remove('active');
                   timeLineText[i].classList.remove('active');
                   timeLineTtitle[i].classList.remove('active');
               } */
        }
    }

    function skillsAnim() {

        const skills = document.querySelector('.slider');
        let contentPosition = skills.getBoundingClientRect().top;
        if (contentPosition < screenPosition) {
            setTimeout(() => {
                skills.classList.add('active');
            }, 500)
        }
    }

    function otherSkillsAnim() {

        const otherSkillsText = document.querySelectorAll('.other-skills__text');
        const otherSkillsCircle = document.querySelectorAll('.other-skills__circle');

        for (let i = 0; i < otherSkillsText.length; i++) {
            let contentPosition = otherSkillsText[i].getBoundingClientRect().top;
            if (contentPosition < screenPosition) {
                setTimeout(() => {
                    otherSkillsText[i].classList.add('active');
                }, 500)
            }
        }

        for (let i = 0; i < otherSkillsCircle.length; i++) {
            let contentPosition = otherSkillsCircle[i].getBoundingClientRect().top;
            if (contentPosition < screenPosition) {
                setTimeout(() => {
                    otherSkillsCircle[i].classList.add('active');
                }, 500)
            }
        }

    }

    function projectAnim() {
        const projects = document.querySelector('.project-slider');
        let contentPosition = projects.getBoundingClientRect().top / 0.8;
        if (contentPosition < screenPosition) {
            setTimeout(() => {
                projects.classList.add('active');
            }, 500)
        }
    }

    function contactAnim() {
        const contact = document.querySelector('.contact-container');
        const contactLeft = document.querySelector('.contact-items-left');
        const contactRight = document.querySelector('.contact-items-right');
        let contentPosition = contact.getBoundingClientRect().top / 0.8;
        if (contentPosition < screenPosition) {
            setTimeout(() => {
                contactLeft.classList.add('active');
                contactRight.classList.add('active');
            }, 500)
        }
    }

    function cvAnim() {
        const cv = document.querySelector('.cv');
        const contentPosition = cv.getBoundingClientRect().top / 0.8;
        if (contentPosition < screenPosition) {
            setTimeout(() => {
                cv.classList.add('active')
            }, 200)
        }
    }
    cvAnim()
    contactAnim()
    projectAnim()
    otherSkillsAnim();
    skillsAnim();
    timeLineAnim()
    sectionTitleAnim()
});

