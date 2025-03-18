import React from 'react';

const InfoItem = React.memo(({ icon: Icon, title, value }) => (
  <div className="info-item">
    <Icon className="info-icon" />
    <div>
      <h4>{title}</h4>
      <p>{value}</p>
    </div>
  </div>
));

export default InfoItem;