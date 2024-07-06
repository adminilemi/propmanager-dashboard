function NotifsCard({ imageUrl, title, date, time }) {
  return (
    <main className=' flex  justify-between'>
      <section className='w-8/12 flex flex-row justify-between'>
        <h3> {title} </h3>
        <small>
          {' '}
          {date} {time}{' '}
        </small>
      </section>
      <figure className='w-3/12'>
        <img src={imageUrl} alt='' />
      </figure>
    </main>
  );
}

export default NotifsCard;
