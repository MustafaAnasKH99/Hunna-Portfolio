import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01-1.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03-1.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="main-pic" />
          </span>
          <p>
            Hunna: Mothers of Revolution attempts to re-contextualize the Syrian revolution and 
            ongoing violence by having individual women revolutionaries tell their stories. 
            Focusing on four women -- Ola Al-Junde, Sabah Al-Halaq, Fadwa Burhan, and Ghalia Al-Rahaal
            -- Hunna recounts the early days of the revolution, the counter-revolutionary violence 
            that forced most of these women into exile, and their various efforts to continue the 
            revolution from exile. By focusing on individual women’s stories, including her losses and 
            her successes, Hunna hopes to tell a story about Syrian women that exceeds the tired 
            accounts of Syrian women as suffering, apolitical, victims. In so doing, it also aims to 
            shed light on the soul of the revolution that has been forgotten, erased, and warped by 
            the media, the regime, and the officially recognized opposition leaders.  
          </p>
          <p>
            Yes, the women interviewed in the documentary have lost much; and yes, the current 
            state of the revolution appears to be dire. And yet none of these women tell stories 
            of loss to elicit sympathy or to express regret. Rather, they tell these stories in 
            order to illustrate the brutality of the Syrian regime and celebrate their own nascent
            capacity to resist, revolt, and liberate Syria.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Activities</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Hunna was planned, filmed, and dircted in Lebanon, Italy, Sweden, and the US.
            Mustafa, Mohamad, and Tory worked together physically and remotely in 2017 all
            year long to get this documentary started. It was also screened in many different
            countries around the globe and in many different languages. So meet this amazing 
            team below! 
          </p>

          <p>
            <a href="https://www.facebook.com/profile.php?id=100007532714970" target="_blank">Tory Brykalski</a> is an instructor of anthropology at the University of 
            California Davis. She has more than 12 years of experience working as 
            a consultant, teacher, and researcher in the Middle East. She received 
            a BA in theology and wilderness education from Wheaton College and an MA 
            in public policy from Columbia University. She is currently writing her 
            dissertation on emergency education in the so-called global war on terrorism. 
            It provides an ethnographic account of emergency education in Lebanon’s Bekaa 
            Valley (2013-2018) in order to explore the nature of the war between the Syrian 
            regime and the Syrian people and the possibility of survival. She is also 
            the co-producer of the ethnographic film Hunna: Mothers of Revolution (2018) 
            and co-author of the children’s animated series The Magic Tent (2019).
          </p>

          <p>
            Her research shows the ways in which the Syrian Revolution is also a pedagogy 
            of life that can be taught in schools planted both in Syria’s borderlands and 
            in exile. She considers her participation in the film project Hunna: Mothers of 
            Revolution as participation in the Revolution, and wants to offer the film as a 
            gift to its viewers in the hopes that it, too, teaches them another way to understand 
            what counts as revolution. 
          </p>

          <p>
            <a target="_blank" href="https://www.mustafaanas.com/">Mustafa Anas</a> is a 19-year-old Syrian refugee who fled Syria in 2013 after the regime’s 
            military invasion of his village. He has been active in Syrian refugee issues abroad since 
            then. His exposure to the international community made him decide to talk more about the 
            revolution and what it means to him as a young man in particular and to the Syrian community 
            in exile more generally.
          </p>

          <p>
            <a href="https://www.facebook.com/mohammad.algonde" target="_blank">Mohamad Aljounde</a> is an 18 year-old Syrian refugee who fled Syria in 2013 after his mom was arrested 
            twice and received a death threat. He settled in Lebanon and began his journey with activism in the 
            Syrian refugee camps since then. A group of Syrian refugees alongside his family and him were able to 
            start a school called "Gharsah" or sprout in English. He sees this project and other projects he did 
            as a continuity of the Syrian revolution were the values he's been taught through the revolution and 
            work manifest every aspect of his life at the moment, after winning the international children peace 
            prize and MTV EMA generation change award. He decided to tell the story of the revolution from his 
            perspective to the international community. 
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>

            <p>Have anything in mind you want to tell us?.</p>
            <p>Feel like helping us spread our message?</p>
            <p>Just drop us a message below!</p>
          
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" placeholder="First and Last name"/>
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" placeholder="email@example.com" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" placeholder="We are listening!" ></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a target="_blank" href="https://www.facebook.com/HunnaMothersofRevolution" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
