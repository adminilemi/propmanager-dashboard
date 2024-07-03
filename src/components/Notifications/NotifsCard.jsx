function NotifsCard({ imageUrl, title, date, time }) {
  return (
    <main className=' d-flex  justify-content-between'>
      <section className='col-8 d-flex flex-row justify-content-between'>
        <h3> {title} </h3>
        <small>
          {' '}
          {date} {time}{' '}
        </small>
      </section>
      <figure className='col-3'>
        <img src={imageUrl} alt='' />
      </figure>
    </main>
  );
}

export default NotifsCard;
