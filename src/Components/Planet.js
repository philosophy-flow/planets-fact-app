function Planet({data}) {
  return (
    <div className="Planet">
      {data.name}
      <br/><br/>
      {data.overview.content}
      <br/><br/>
      {data.overview.source}
    </div>
  );
}

export default Planet;
