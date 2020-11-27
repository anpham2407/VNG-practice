// eslint-disable-next-line
import {useEffect} from 'react';
import './scrollspy.scss'
import Feature from '../../components/Feature';
import MenuItem from '../../components/MenuItem';
import {menu1, menu2} from '../../data/menu';
import Icon from '../../components/Icon';
const ScrollSpy = () => {

  useEffect(()=> {
    const scrollLink = document.querySelectorAll('.links-container a[href^="#"]');
    const section = document.querySelectorAll('.targetScrollSection');
    const sections = {};
    let identCounter = 0;

    scrollLink.forEach(item => {
        item.addEventListener('click', (e) => {
            let targetBlock = document.querySelector(e.target.hash);
            e.preventDefault()
            window.scrollTo({
                top: targetBlock.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    })

    Array.prototype.forEach.call(section, (e) => {
        sections[e.id] = e.offsetTop - 50;
    });

    window.onscroll = () => {
        let scrollPosition = document.documentElement.scrollTop + 50 || document.body.scrollTop + 50;
        for (identCounter in sections) {
            if (sections[identCounter] <= scrollPosition) {
                document.querySelector('.active').setAttribute('class', ' ');
                document.querySelector('a[href*=' + identCounter + ']').setAttribute('class', 'active');
            }
        }
    };
  },[]);
  return (
    <div className="scrollspy">
      <div className="links-container">
        <a className="active" href="#firstSection">Cà Phê</a>
        <a href="#secondSection">Bánh ngọt</a>
        <a href="#thirdSection">Trà</a>
        <a href="#fifthSection">Bánh mì</a>
      </div>
      <div className="container pt">
        <div className="target-sections">
            <div className="targetScrollSection" id="firstSection">
            <Feature 
                heading="Cà phê"
                data={menu1}
            />
            </div>
            <div className="targetScrollSection" id="secondSection">
                <Feature 
                    heading="Trà"
                    data={menu1}
                />
            </div>
            <div className="targetScrollSection" id="thirdSection">
                <Feature 
                    heading="Bánh ngọt"
                    data={menu1}
                />
            </div>
            <div className="targetScrollSection" id="fifthSection">
                <Feature
                    heading="Bánh mì"
                    data={menu1}
                />
                <Feature 
                    data={menu1}
                />
                <Feature 
                    data={menu1}
                />
                <Feature 
                    data={menu1}
                />
            </div>
        </div>
      </div>
    </div>
  );
}

export default ScrollSpy