import aboutStyles from '../styles/About.module.css'

export default function About() {
    
    return (
        <div className={aboutStyles.about}>
            <h1>So who Am <br/>-I-?</h1>
            <h3 className="title1">Just trying to learn next.js</h3>
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
          color: #2e3e4e;
          text-align: center;
          font-size: 3rem;
        }
        .para {
          width: 100vw;
          font-size: 1.2rem;
          padding: 1rem 20rem;
          color: #1e2e3e;
          letter-spacing: 0.2rem;
        }
        `}
      </style>
        </div>
    )
}