import Button from '@/components/Button/Button';
import Heading from '@/components/Heading';
import HtmlHeader from '@/components/HtmlHeader';
import React from 'react'

function NotFound() {
  return (
    <div className="NotFound">
      <HtmlHeader title="404 - Page non trouvée"/>
      <Heading level={1} className="align">Erreur 404</Heading>
      <Heading level={4} className="align">Page non trouvée</Heading>
      <Button href="/home" rounded={5}>Revenir a l'acceuil</Button>
    </div>
  )
}

export default NotFound;