import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import ImportantBox from './ImportantBox';
import styles from '../styles/BlogTypography.module.css';

const NewsDetail3 = () => {
  const { t, i18n } = useTranslation('news3');
  const router = useRouter();

  const newsItem = {
    id: 3,
    title: t('title'),
    description: t('description'),
    image: "/images/NewsDetail3.webp",
    date: t('date'),
    category: t('category'),
    author: t('author'),
    readTime: t('readTime'),
    content: i18n.language === 'sp' ? `
      <h3>La Molécula Anti-Envejecimiento Revolucionaria de la que tu Médico no Habla</h3>
      <p>Los científicos la llaman "el antioxidante universal". Los expertos en belleza susurran sobre sus poderes transformadores para la piel. Pero la mayoría de las personas nunca ha oído hablar de esta fuente de juventud celular que se esconde a plena vista.</p>

      <h3>El Descubrimiento que Cambia Todo</h3>
      <p>Mientras gastas cientos de euros en cremas y tratamientos que solo actúan en la superficie, hay una molécula que trabaja a un nivel más profundo - tus mitocondrias - para ralentizar efectivamente el envejecimiento desde adentro.</p>

      <h4>Ácido Alfa Lipoico (ALA): El Protector Celular Universal</h4>
      <p>Los efectos anti-envejecimiento de este antioxidante natural sintetizado en tejidos humanos han atraído un interés creciente en los últimos años. Pero aquí está lo que lo hace extraordinario: es tanto hidrosoluble como liposoluble, lo que significa que puede proteger cada célula de tu cuerpo.</p>

      <h3>Por qué tu Piel Envejece Más Rápido de lo que Debería</h3>
      <p>Cada día, tus células están bajo ataque de:</p>
      <ul>
        <li><strong>Radicales libres</strong> de contaminación, estrés y rayos UV</li>
        <li><strong>Glicación</strong> - cuando las moléculas de azúcar dañan tu colágeno</li>
        <li><strong>Inflamación</strong> que degrada los tejidos sanos</li>
        <li><strong>Estrés oxidativo</strong> que acelera el envejecimiento celular</li>
      </ul>

      <h3>El Efecto Máquina del Tiempo Celular</h3>
      <p>El Ácido Alfa Lipoico no solo neutraliza un tipo de radical libre - es como tener una llave maestra que desbloquea la protección para cada parte de tu célula:</p>
      <ul>
        <li><strong>Recicla Otros Antioxidantes</strong> - Revive la vitamina C, vitamina E y glutatión</li>
        <li><strong>Protege tus Mitocondrias</strong> - Las centrales eléctricas de tus células permanecen jóvenes y energéticas</li>
        <li><strong>Previene la Glicación</strong> - Impide que el azúcar cree Productos Finales de Glicación Avanzada (AGEs) que aceleran el envejecimiento</li>
        <li><strong>Reduce la Inflamación</strong> - Calma la inflamación crónica que te envejece desde adentro</li>
      </ul>

      <h3>La Transformación Visible</h3>
      <p>Dentro de pocas semanas con niveles óptimos de ALA, las personas notan:</p>
      <ul>
        <li>Piel que brilla con un resplandor saludable que no habían visto en años</li>
        <li>Reducción de arrugas finas mientras los mecanismos de reparación celular se activan</li>
        <li>Coloración más uniforme gracias a la curación de daños inflamatorios</li>
        <li>Mejora en la textura gracias a la protección avanzada del colágeno</li>
      </ul>

      <h3>Más Allá de la Belleza: El Reset Total del Cuerpo</h3>
      <p>Las propiedades anti-envejecimiento del ALA van mucho más allá de la piel:</p>
      <ul>
        <li><strong>Energía Potenciada</strong> - Tus mitocondrias se vuelven más eficientes, dándote la vitalidad de alguien más joven</li>
        <li><strong>Mayor Claridad Mental</strong> - Células cerebrales protegidas significan mejor concentración y memoria</li>
        <li><strong>Recuperación Mejorada</strong> - Tu cuerpo se recupera más rápido del estrés y ejercicio</li>
        <li><strong>Mejor Control del Azúcar en Sangre</strong> - El ALA ayuda a tus células a usar la glucosa más efectivamente</li>
      </ul>

      <h3>La Investigación que Demuestra su Eficacia</h3>
      <p>Estudios recientes han demostrado que el ALA puede actuar en infecciones virales modulando parámetros bioquímicos, virológicos, inmunológicos y neurológicos. Pero es en la investigación anti-envejecimiento donde las cosas se ponen realmente emocionantes.</p>

      <h4>Las Bases Científicas</h4>
      <p>El ALA es un ácido graso de cadena corta que contiene azufre presente en las mitocondrias de todos los tipos de células eucariotas, y tanto la forma oxidada como la reducida proporcionan una protección poderosa contra el daño celular relacionado con la edad.</p>

      <h3>Los Aceleradores de la Edad Celular que te Están Atacando en este Momento</h3>
      <p>Cada segundo, tus células están bajo asedio de un ejército invisible de aceleradores de la edad:</p>
      <ul>
        <li><strong>Asalto de Radicales Libres</strong> - Estas moléculas inestables roban electrones a tus células sanas</li>
        <li><strong>Ataque de Glicación</strong> - Las moléculas de azúcar se unen a proteínas como el colágeno</li>
        <li><strong>Fuego Inflamatorio</strong> - La inflamación crónica de bajo nivel quema a través de tu cuerpo como un fuego lento</li>
        <li><strong>Decaimiento Mitocondrial</strong> - Tus centrales eléctricas celulares pierden gradualmente eficiencia</li>
      </ul>

      <h3>Los Estándares de Calidad que Importan</h3>
      <p>La industria de suplementos está inundada de productos ALA de calidad inferior que no proporcionan resultados. Aquí está qué buscar:</p>
      <ul>
        <li><strong>R-Ácido Alfa Lipoico</strong> - Esta es la forma naturalmente presente que tu cuerpo realmente usa</li>
        <li><strong>Formulación Estabilizada</strong> - El ALA puro es inestable y se degrada rápidamente</li>
        <li><strong>Dosificación Correcta</strong> - La investigación apoya 300-600mg diarios para beneficios anti-envejecimiento</li>
        <li><strong>Pruebas de Terceros</strong> - Tu ALA debería ser probado para pureza y potencia por un laboratorio independiente</li>
      </ul>

      <h3>El Desafío de la Juventud de 90 Días</h3>
      <ul>
        <li><strong>Mes 1: Los Fundamentos</strong> - Tus defensas antioxidantes celulares se fortalecen</li>
        <li><strong>Mes 2: Los Cambios Visibles</strong> - La piel comienza a verse más brillante y suave</li>
        <li><strong>Mes 3: La Transformación</strong> - Los efectos acumulativos se vuelven innegables</li>
      </ul>

      <h3>No Dejes que el Tiempo Gane</h3>
      <p>Cada día que pasa sin niveles óptimos de ALA es otro día de envejecimiento celular descontrolado. Pero tienes más control sobre tu proceso de envejecimiento de lo que jamás imaginaste.</p>

      <p>La fuente de la juventud no es un manantial mítico - es la regeneración celular que está ocurriendo en tus mitocondrias en este momento. Dale la ventaja del ALA y descubre cómo se siente rejuvenecer.</p>
    ` : `
      <h3>The Age-Reversing Molecule Your Doctor Isn't Telling You About</h3>
      <p>Scientists call it "the universal antioxidant." Beauty gurus whisper about its skin-transforming powers. But most people have never heard of the cellular fountain of youth hiding in plain sight.</p>

      <h3>The Discovery That Changes Everything</h3>
      <p>While you're spending hundreds on creams and procedures that only treat the surface, there's a molecule working at the deepest level - your mitochondria - to actually slow down aging from the inside out.</p>

      <h4>Alpha Lipoic Acid (ALA): The Universal Cellular Protector</h4>
      <p>The anti-aging effects of this natural antioxidant synthesized in human tissues have attracted a growing interest in recent years. But here's what makes it extraordinary: it's both water AND fat-soluble, meaning it can protect every single cell in your body.</p>

      <h3>Why Your Skin Is Aging Faster Than It Should</h3>
      <p>Every day, your cells are under attack from:</p>
      <ul>
        <li><strong>Free radicals</strong> from pollution, stress, and UV rays</li>
        <li><strong>Glycation</strong> - when sugar molecules damage your collagen</li>
        <li><strong>Inflammation</strong> that breaks down healthy tissue</li>
        <li><strong>Oxidative stress</strong> that accelerates cellular aging</li>
      </ul>

      <h3>The Cellular Time Machine Effect</h3>
      <p>Alpha Lipoic Acid doesn't just neutralize one type of free radical - it's like having a master key that unlocks protection for every part of your cell:</p>
      <ul>
        <li><strong>Recycles Other Antioxidants</strong> - Brings vitamin C, vitamin E, and glutathione back to life</li>
        <li><strong>Protects Your Mitochondria</strong> - The powerhouses of your cells stay young and energetic</li>
        <li><strong>Prevents Glycation</strong> - Stops sugar from creating age-accelerating Advanced Glycation End Products (AGEs)</li>
        <li><strong>Reduces Inflammation</strong> - Calms the chronic inflammation that ages you from the inside</li>
      </ul>

      <h3>The Visible Transformation</h3>
      <p>Within weeks of optimal ALA levels, people notice:</p>
      <ul>
        <li>Skin that glows with a healthy radiance they haven't seen in years</li>
        <li>Reduced fine lines as cellular repair mechanisms kick into high gear</li>
        <li>Even skin tone as inflammatory damage heals</li>
        <li>Improved texture from enhanced collagen protection</li>
      </ul>

      <h3>Beyond Beauty: The Total Body Reset</h3>
      <p>ALA's anti-aging properties extend far beyond skin deep:</p>
      <ul>
        <li><strong>Enhanced Energy</strong> - Your mitochondria become more efficient, giving you the vitality of someone years younger</li>
        <li><strong>Sharper Mental Clarity</strong> - Protected brain cells mean better focus and memory</li>
        <li><strong>Improved Recovery</strong> - Your body bounces back from stress and exercise faster</li>
        <li><strong>Better Blood Sugar Control</strong> - ALA helps your cells use glucose more effectively</li>
      </ul>

      <h3>The Research That Proves It Works</h3>
      <p>Recent studies have demonstrated that ALA can act on viral infections by modulating biochemical, virological, immunological, and neurological parameters. But the anti-aging research is where things get really exciting.</p>

      <h4>The Scientific Foundation</h4>
      <p>ALA is a short-chain sulfur-containing fatty acid occurring in the mitochondria of all kinds of eukaryotic cells, and both the oxidized and reduced forms provide powerful protection against age-related cellular damage.</p>

      <h3>The Cellular Age Accelerators Attacking You Right Now</h3>
      <p>Every second, your cells are under siege from an invisible army of age accelerators:</p>
      <ul>
        <li><strong>Free Radical Assault</strong> - These unstable molecules steal electrons from your healthy cells</li>
        <li><strong>Glycation Attack</strong> - Sugar molecules bind to proteins like collagen</li>
        <li><strong>Inflammatory Fire</strong> - Chronic low-level inflammation burns through your body like a slow fire</li>
        <li><strong>Mitochondrial Decay</strong> - Your cellular power plants gradually lose efficiency</li>
      </ul>

      <h3>The Quality Standards That Matter</h3>
      <p>The supplement industry is flooded with inferior ALA products that won't deliver results. Here's what to look for:</p>
      <ul>
        <li><strong>R-Alpha Lipoic Acid</strong> - This is the naturally occurring form that your body actually uses</li>
        <li><strong>Stabilized Formulation</strong> - Pure ALA is unstable and degrades quickly</li>
        <li><strong>Proper Dosage</strong> - Research supports 300-600mg daily for anti-aging benefits</li>
        <li><strong>Third-Party Testing</strong> - Your ALA should be tested for purity and potency by an independent laboratory</li>
      </ul>

      <h3>The 90-Day Youth Challenge</h3>
      <ul>
        <li><strong>Month 1: The Foundation</strong> - Your cellular antioxidant defenses strengthen</li>
        <li><strong>Month 2: The Visible Changes</strong> - Skin begins to look brighter and smoother</li>
        <li><strong>Month 3: The Transformation</strong> - The cumulative effects become undeniable</li>
      </ul>

      <h3>Don't Let Time Win</h3>
      <p>Every day that passes without optimal ALA levels is another day of unchecked cellular aging. But you have more control over your aging process than you ever imagined.</p>

      <p>The fountain of youth isn't a mythical spring - it's the cellular regeneration happening in your mitochondria right now. Give it the ALA advantage, and discover what it feels like to age backwards.</p>
    `
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Back Button */}
        <button 
          onClick={() => router.push('/news')}
          className="flex items-center gap-2 text-[#0089CF] hover:text-[#0074B7] font-semibold mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          {t('backToNews')}
        </button>

        {/* Article Header */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="relative h-64 md:h-80">
            <OptimizedImage
              src={newsItem.image}
              alt={newsItem.title}
              className="w-full h-full"
              priority={true}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-[#0089CF] px-3 py-1 rounded-full text-sm font-medium">
                  {newsItem.category}
                </span>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar size={16} />
                  {newsItem.date}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <User size={16} />
                  {newsItem.author}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock size={16} />
                  {newsItem.readTime}
                </div>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold leading-tight">
                {newsItem.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div 
            className={`prose prose-lg max-w-none ${styles.blogContent}`}
            dangerouslySetInnerHTML={{ __html: newsItem.content }}
          />
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center bg-blue-50 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {t('discoverMore')}
          </h3>
          <button 
            onClick={() => router.push('/news')}
            className="bg-[#0089CF] text-white px-6 py-3 rounded-lg hover:bg-[#0074B7] transition-colors font-semibold"
          >
            {t('backToNews')}
          </button>
        </div>
      </div>


    </div>
  );
};

export default NewsDetail3;