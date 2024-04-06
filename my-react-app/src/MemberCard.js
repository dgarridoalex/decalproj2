import React from 'react';

function MemberCard({ member }) {
  return (
    <div className="member-card">
      <img src={member.image} alt={member.name} />
      <h2>{member.name}</h2>
      <p><strong>Role:</strong> {member.role}</p>
      <p>{member.bio}</p>
    </div>
  );
}

export default MemberCard;
