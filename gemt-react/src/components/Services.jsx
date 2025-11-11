import './Services.css';

function Services() {
  const services = [
    {
      icon: '⚡',
      title: 'Connectors',
      placeholder: 'Various electronic connectors',
      link: 'See all',
      color: '#4a90e2'
    },
    {
      icon: '⚡',
      title: 'Wire Harness & Cable Assembly',
      placeholder: 'Cable assemblies and harnesses',
      link: '',
      color: '#7b68ee'
    },
    {
      icon: '⚡',
      title: 'Plastic Injection Molding & Product Assembly',
      placeholder: 'Molded plastic components',
      link: '',
      color: '#50c878'
    },
    {
      icon: '⚡',
      title: 'Tool & Fixture Design & Building for Molding',
      placeholder: 'Precision tools and fixtures',
      link: '',
      color: '#ff6b6b'
    }
  ];

  return (
    <section className="services">
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-header">
              <span className="service-icon">{service.icon}</span>
              <h3 className="service-title">{service.title}</h3>
            </div>
            <div className="service-image">
              <div className="service-image-placeholder" style={{ backgroundColor: service.color }}>
                <p>{service.placeholder}</p>
              </div>
            </div>
            {service.link && (
              <a href="#" className="service-link">{service.link}</a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
