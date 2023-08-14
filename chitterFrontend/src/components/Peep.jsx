import './Peep.css'

const Peep = ({ peeps }) => {

    let peepArray = [];
    peeps.forEach(e => {
        peepArray.push(e)
    })

    // TODO: VERY IMPORTANT - it might be worth ordering them by date not by order in database - because the order could change?
    peepArray.reverse();

    // console.log(peepArray)

    return (
        <div >
            {peepArray.map(peepObj => (
                <div key={peepObj._id} className="rounded peepDiv">
                    <div className='peepHead'>
                        <h5 className='peepUserName'>
                            {peepObj.name}@{peepObj.userName}
                        </h5>
                        <h6 className='peepDate'>
                            {peepObj.peepDate}
                        </h6>
                    </div>
                    <p>
                        {peepObj.peepContent}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default Peep
