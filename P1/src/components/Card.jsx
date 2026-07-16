function Card({title="Default", buttonText="chec it out", description="Very Good Course", img}){
    return (
        <>
            <div className='max-w-sm bg-white border border-gray-200 rounded-xl mt-8 shadow overflow-hidden transition-shadow'>
                <img 
                className='w-full h-50 object-cover'
                src={img} alt="Sample image" />

                <div className='p-4'>
                    <h2 className='text-lg font-semibold text-black'>{title}</h2>
                    <p className='text-sm text-gray-600'>{description}</p>
                    <button className='mt-4 px-4 bg-blue-700 text-white rounded-lg py-2 hover:bg-blue-600'>{buttonText}</button>
                </div>
            </div>
        </>
    )
}

export default Card