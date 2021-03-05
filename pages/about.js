import aboutStyles from '../styles/About.module.css'

export default function About() {
    
    return (
        <div className={aboutStyles.about}>
            <h1>So who Am <br/>-I-?</h1>
            <h3>Nooo boooody knooooows...</h3>
            <p className='para'>
        While learning webdevelopment I will try out more of the frameworks
        and such and such. Keeping my mind open to learn new things. <br/>
        So far I´ve learned HTML, CSS, JS, REACT, a bit of UX and using FIGMA, worked with Agile development using scrum and trello. <br/>
        Trying out different libraries in REACT, Styled components, Spring, React-router-dom, Using Hooks, props, state, useEffect, etc. <br />
        Now trying out NEXT.js also learned a bit of SASS, BOOTSTRAP, and connecting projects to FIREBASE. <br />
        I  have also a basic understanding of the JAVA syntax it was the first language I tried out.  
      </p>
      <style jsx>
        {`
        .title1 {
          margin: 4rem 4rem;
        }
        .para {
          font-size: 2rem;
          margin: 0 8rem;
        }
        `}
      </style>
        </div>
    )
}