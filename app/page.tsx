import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import QualitySlider from '@/components/QualitySlider';
import SystemCalculator from '@/components/SystemCalculator';
import WhyMe from '@/components/WhyMe';
import Truth from '@/components/Truth';
import InstallationGallery from '@/components/InstallationGallery';
import UseCases from '@/components/UseCases';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <QualitySlider />
      <SystemCalculator />
      <Truth />
      <InstallationGallery />
      <WhyMe />
      <UseCases />
      <ContactForm />
      <Footer />
    </main>
  );
}
