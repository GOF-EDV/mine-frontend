import { Container, Heading, Text } from "@chakra-ui/react"

function AboutUs() {
    return (
        <Container maxW='3xl' minH={'100vh'}>
            <Heading textAlign={'center'} as='h2' size='2xl' marginTop={'10'} marginBottom={'10'} noOfLines={1}>
                Esta es nuestra historia
            </Heading>
            <Text marginBottom={'4'} >Nuestra convocatoria como equipo fue bastante espontánea. El Nro 1 convoco al Nro 2 y luego ambos convocaron el el Discord #general y asi aparecieron del Nro 3 al 5. Finalmente el grupo adopto un nombre temporal-para siempre de GOF5 (Gang of Four).</Text>
            <Text marginBottom={'4'} >Entre nosotros hay un espíritu de igualdad y se respetan las intervenciones de cada quién. Esto sugió de manera natural desde el principio.</Text>
            <Text marginBottom={'4'} >Comenzamos a reunirnos para ver cuáles ideas teniamos. Cada uno expuso su idea, y con mente maestra ibamos agregando detalles y otras cosas que fueron apareciendo.</Text>
            <Text marginBottom={'4'} >Dejamos aterrizar la idea un dia o dos, y luego se sometió a votación. Nadie hizo presión, ni publicidad, ni lobby. No se compraron votos. No importó tampoco de quén fue las ideas.</Text>
            <Text marginBottom={'4'} >Acordamos comenzar a hacer reuniones diarias para poder alcanzar las metas. Las primeras reuniones al menos de 1 hora para poner a funcionar la mente maestra y darle forma al proyecto. Luego de establecer el tablero Jira, comenzar a crear y asignar tareas en el Backlog, nos reumos diariamente en Standups de 15-20 minutos para hacer el segumiento, viendo que se hizo el día anterior, que se planea hacer el día de hoy y la existencia de algún bloqueo.</Text>
            <Text marginBottom={'4'} >Comenzamos a trabajar en el Whitepaper, en reuniones un tanto maratónicas (3-5 horas) pero muy productivas. Delimitamos el proyecto, describimos actores, procedimientos, y sobre todo, la parte conceptual: la historia, el impacto, valor agregado de la web3 sobre hacerlo en la web2, posibles problemas, marco legal, el pitch, las tecnologías, entre otras cosas.</Text>
            <Text marginBottom={'4'} >Ya con la agenda para las próximas 2-3 semanas más clara, comenzamos a trabajar en equipos para el Frontend, Backend y Operaciones.</Text>
        </Container>
    )
}

export default AboutUs