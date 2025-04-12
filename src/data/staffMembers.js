// Sample staff member data
// In a real application, this would likely be fetched from an API

const staffMembers = [
    // Network Owners
    {
      id: 'owner1',
      username: 'Rio',
      role: 'Network Owner',
      subroles: ['Website Manager', 'Head Administrator'],
      skinUrl: '/assets/images/minecraft-skins/rio.png',
      discord: 'rio#0001'
    },
    
    // Managers
    {
      id: 'manager1',
      username: 'Linaton',
      role: 'Manager',
      subroles: ['Staff Manager', 'Appeals'],
      skinUrl: '/assets/images/minecraft-skins/linaton.png',
      discord: 'linaton#1234'
    },
    {
      id: 'manager2',
      username: 'Weqy',
      role: 'Manager',
      subroles: ['Testing Manager', 'Development'],
      skinUrl: '/assets/images/minecraft-skins/weqy.png',
      discord: 'weqy#5678'
    },
    
    // Tierlist Administrators
    {
      id: 'admin1',
      username: 'QZ',
      role: 'Tierlist Administrator',
      subroles: ['Cheating Reports'],
      skinUrl: '/assets/images/minecraft-skins/qz.png',
      discord: 'qz#9012'
    },
    {
      id: 'admin2',
      username: 'Acilic',
      role: 'Tierlist Administrator',
      subroles: ['Verification', 'Testing Oversight'],
      skinUrl: '/assets/images/minecraft-skins/acilic.png',
      discord: 'acilic#3456'
    },
    
    // Regulators
    {
      id: 'regulator1',
      username: 'Ehqua',
      role: 'Regulator',
      subroles: ['Ban Management', 'Staff Reports'],
      skinUrl: '/assets/images/minecraft-skins/ehqua.png',
      discord: 'ehqua#7890'
    },
    {
      id: 'regulator2',
      username: 'Simiply',
      role: 'Regulator',
      subroles: ['Testing Supervisor', 'Tester Evaluation'],
      skinUrl: '/assets/images/minecraft-skins/simiply.png',
      discord: 'simiply#2345'
    },
    {
      id: 'regulator3',
      username: 'Obsessivebf',
      role: 'Regulator',
      subroles: ['FFA Testing Lead', 'Training'],
      skinUrl: '/assets/images/minecraft-skins/obsessivebf.png',
      discord: 'obsessivebf#6789'
    },
    
    // Moderators
    {
      id: 'mod1',
      username: 'ModUser1',
      role: 'Moderator',
      subroles: ['Chat Moderation'],
      skinUrl: '/assets/images/minecraft-skins/mod1.png',
      discord: 'moduser1#1111'
    },
    {
      id: 'mod2',
      username: 'ModUser2',
      role: 'Moderator',
      subroles: ['Support Team'],
      skinUrl: '/assets/images/minecraft-skins/mod2.png',
      discord: 'moduser2#2222'
    },
    {
      id: 'mod3',
      username: 'ModUser3',
      role: 'Moderator',
      subroles: ['Ticket Handler'],
      skinUrl: '/assets/images/minecraft-skins/mod3.png',
      discord: 'moduser3#3333'
    },
    
    // Senior Testers
    {
      id: 'seniortester1',
      username: 'TestLead1',
      role: 'Senior Tester',
      subroles: ['HT3 Tester', 'Evaluator'],
      skinUrl: '/assets/images/minecraft-skins/tester1.png',
      discord: 'testlead1#4444'
    },
    {
      id: 'seniortester2',
      username: 'TestLead2',
      role: 'Senior Tester',
      subroles: ['LT3 Tester', 'Trainer'],
      skinUrl: '/assets/images/minecraft-skins/tester2.png',
      discord: 'testlead2#5555'
    }
  ];
  
  // Group staff members by role for easier display
  export const staffByRole = {
    'Network Owner': staffMembers.filter(member => member.role === 'Network Owner'),
    'Manager': staffMembers.filter(member => member.role === 'Manager'),
    'Tierlist Administrator': staffMembers.filter(member => member.role === 'Tierlist Administrator'),
    'Regulator': staffMembers.filter(member => member.role === 'Regulator'),
    'Moderator': staffMembers.filter(member => member.role === 'Moderator'),
    'Senior Tester': staffMembers.filter(member => member.role === 'Senior Tester')
  };
  
  // Role hierarchy for display order
  export const roleHierarchy = [
    'Network Owner',
    'Manager',
    'Tierlist Administrator',
    'Regulator',
    'Moderator',
    'Senior Tester'
  ];
  
  export default staffMembers;