"use client"

import { useState } from "react"
import { Heart, X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Placeholder photos - replace with your actual photos
const photos = [
  {
    id: 1,
    src: "/photos/Nosotros.jpeg",
    alt: "Nuestra primera cita",
    caption: "Nuestra primera cita en el Museo de Arte Moderno",
  },
  {
    id: 2,
    src: "/photos/Museo.jpeg",
    alt: "Museo",
    caption: "Desde ese día supe que eras especial",
  },
  {
    id: 3,
    src: "/photos/BesoCumple.jpeg",
    alt: "BesoCumple",
    caption: "Este beso fue mi mejor regalo de cumpleaños",
  },
  {
    id: 4,
    src: "/photos/PrimerRegalo.jpeg",
    alt: "Primer Regalo",
    caption: "El primer regalo que me diste, lo guardo como un tesoro, aunque me discutas aveces por no leerlo tanto",
  },
  {
    id: 5,
    src: "/photos/SushiCita.jpeg",
    alt: "Cita en Fumiyaki",
    caption: "Nuestra cita en Fumiyaki, la primera vez que comimos suchi juntos, se volvió todo una tradición para nosotros",
  },
  {
    id: 6,
    src: "/photos/CitaSushi2.jpeg",
    alt: "Cita en Fumiyaki 2",
    caption: "Te confieso algo, yo no sabía usar palillos chinos, pero me hice el interesante para impresionarte, y ahora soy un experto en comer sushi con palillos gracias a ti",
  },
    {
    id: 7,
    src: "/photos/Foto mas linda.jpeg",
    alt: "Foto mas linda",
    caption: "Esta es la foto más linda que tengo de nosotros, me encanta porque refleja lo felices que somos juntos, pese a las discusiones y problemas",
  },
  {
    id: 8,
    src: "/photos/CitaMolestos.jpeg",
    alt: "Cita Molestos",
    caption: "A esta salida a Café FM fuimos molestos, siempre me discutiste que tenía mala cara, quizas estuve molesto por algo, pero me gusta la foto porque aun estando molestos refleja lo bien que la paso contigo, y lo mucho que me gusta estar contigo incluso en los momentos difíciles",
  },
  {
    id: 9,
    src: "/photos/CitaGalería.jpeg",
    alt: "Cita en la Galería",
    caption: "Que díficl fue esta salida, recuerdas como queríamos ir en guagua, pero no había, al final nos alocamos y cogimos el carro y nos fuimos sin miedo a nada por ahí",
  },
  {
    id: 10,
    src: "/photos/CitaGaleria2.jpeg",
    alt: "Cita en la Galería 2",
    caption:"Valió la pena cada minuto de esa salida, el lugar, el ambiente, todo fue perfecto y es una de nuestras salidad favoritas, que nunca olvidaremos"
  },
  {
    id:11,
    src: "/photos/CitaGaleria3.jpeg",
    alt: "Cita en la Galería 3",
    caption: "Si recuerdas esta obra reflejaba la tierra, la conexion y el vinculo con lo terrenal, la arena y el lodo, las gemas preciosas, un anclaje a lo mortal, y para mi eso eres tu, mi ancla"
  },
  {
    id:12,
    src: "/photos/Regreso a casa.jpeg",
    alt: "Regreso a casa",
    caption: "Esta foto me la tomaste de regreso a casa, una de las pocas veces que pude manejarte en mi carrito."
  },
  {
    id:13,
    src: "/photos/CitaPiscina.jpeg",
    alt: "Cita en la Piscina",
    caption: "Esta fue en el cumple de Denis, tuve asma, y me demostraste que siempre me cuidarías y estarías de mi lado"
  },
  {
    id:14,
    src: "/photos/AnilloEscondido.jpeg",
    alt: "Anillo Escondido",
    caption: "Cuando compre el anillo de compromiso, y me tire fotos con el delante tuyo mientras dormías, según tu pudiste verlo, pero se que no fue así"
  },
    {
    id:15,
    src: "/photos/Pedida.jpg",
    alt: "Pedida de Matrimonio",
    caption: "El día que te propuse matrimonio, el día más feliz de mi vida"
  },
 {
    id:16,
    src: "/photos/Varadero.jpeg",
    alt: "Varadero",
    caption: "Nuestro viajesito a Varadero, hubo sus turbulencias, pero fue uno de nuestros mejores viajes, de los muchos que vendran en un futuro"
  },
      {
    id:17,
    src: "/photos/MontanaRusa.jpeg",
    alt: "Montaña Rusa",
    caption: "Recuerdas la montaña rusa del parque de diversiones? Fue una de las experiencias más emocionantes que hemos compartido, gritar juntos y sentir la adrenalina fue increíble. Gracias por ser mi compañera de aventuras"
  },
      {
    id:18,
    src: "/photos/PalacioMatrimonio2.jpeg",
    alt: "Palacio de Matrimonio",
    caption: "El día que nos casamos, el día más feliz de mi vida, el día que se hizo realidad nuestro sueño de estar juntos para siempre, que nos prometimos fidelidad y compañerismo eterno. Te amo Cuervito"
  },
      {
    id:19,
    src: "/photos/BesoBoda.jpeg",
    alt: "Beso Fotos de Boda",
    caption: "Nuestro beso en las fotos de boda, y toda la aventura de la sesión de fotos"
  },
      {
    id:20,
    src: "/photos/Boda.jpeg",
    alt: "Fotos de Boda",
    caption: "Que cansado fue la sesión verdad, pero valió la pena cada minuto, cada pose, cada foto, porque el resultado fue increíble, y ahora tenemos estas hermosas fotos para recordar ese día tan especial"
  },
      {
    id:21,
    src: "/photos/FotoBodaFav.jpeg",
    alt: "Foto Favorita de Boda",
    caption: "Esta ya sabes que es mi foto favorita de la sesión, la miro sin parar. Me encanta como nos vemos"
  },
]

export function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)

  const openLightbox = (index: number) => setSelectedPhoto(index)
  const closeLightbox = () => setSelectedPhoto(null)
  
  const goToPrevious = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto(selectedPhoto === 0 ? photos.length - 1 : selectedPhoto - 1)
    }
  }
  
  const goToNext = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto(selectedPhoto === photos.length - 1 ? 0 : selectedPhoto + 1)
    }
  }

  return (
    <section className="py-24 px-4 bg-card/50">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary/30" />
            <Heart className="w-5 h-5 text-primary fill-primary" />
            <div className="h-px w-12 bg-primary/30" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Nuestros Momentos
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Cada foto guarda un pedacito de nuestra historia de amor
          </p>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {photos.map((photo, index) => (
            <button
              key={photo.id}
              onClick={() => openLightbox(index)}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-muted cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              {/* Placeholder gradient - replace with actual image */}
              <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" />              
              {/* Photo placeholder icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Heart className="w-12 h-12 text-primary/40 group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-end">
                <div className="w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-card text-sm font-medium">{photo.caption}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      {selectedPhoto !== null && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={closeLightbox}
            className="absolute top-4 left-4 rounded-full"
          >
            <X className="w-6 h-6 text-red" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-4 rounded-full"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <div className="max-w-4xl w-full text-center">
            {/* Photo placeholder */}
            <div className="aspect-video bg-muted rounded-2xl flex items-center justify-center mb-4">
              <div className="text-center">
                <Heart className="w-20 h-20 text-primary/40 mx-auto mb-4" />
                  <img src={photos[selectedPhoto].src} alt={photos[selectedPhoto].alt} className="w-96 h-96 rounded-2xl" />               
              </div>
            </div>
            <p className="text-lg font-medium text-foreground">
              {photos[selectedPhoto].caption}
            </p>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            className="absolute right-4 rounded-full"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      )}
    </section>
  )
}
