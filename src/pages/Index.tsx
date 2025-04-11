
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import LatestArticles from "@/components/home/LatestArticles";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import NewsletterSection from "@/components/home/NewsletterSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedProjects />
      <LatestArticles />
      <FeaturedProducts />
      <NewsletterSection />
    </Layout>
  );
};

export default Index;
