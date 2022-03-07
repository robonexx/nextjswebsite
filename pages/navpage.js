import { Nav } from '../components/Nav';

export default function Navpage() {

    
    return (
        <div >
            <h3 className="title1">Just trying to learn next.js</h3>
            <p className='para'>
        Learning next.js and also wp to be able to use nextjs with wp and headless cms, also apollo client and graphQl
      </p>
      <style jsx>
        {`
        .title1 {
          color: #222222;
          text-align: center;
          font-size: 2rem;
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
            
            <Nav />
        </div>
    )
}
