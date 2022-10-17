import './App.css';

function Tour(props){

    return(
        <div>
            {props.on && <main>
                <section>
                    <div className='Container'>
                        <img src={props.img}/>
                        <div className='price'>
                            <h4>{props.name}</h4>
                            <span>{props.price}</span>    
                        </div>
                        <p>{props.showTxt ? props.txt:`${props.txt.substring(0,250)} ...`}
                        <button className='sh' onClick={props.toggleTxt}>{props.showTxt? 'Show Less':'Read More'}</button>
                        </p>
                        <button className='last' onClick={props.toggle}>Not intersted</button>
                    </div>
                </section>
            </main>}
        </div>
      
    )
}

export default Tour;