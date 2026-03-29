import Link from 'next/link';
import { getServiceIcon } from "@/utils/iconMap";

import dbConnect from '@/lib/db';
import Service from '@/lib/models/Service';

async function getServices() {
  await dbConnect();
  const services = await Service.find({ isActive: true }).lean();
  return services.map(s => ({
    ...s,
    _id: s._id.toString(),
    createdAt: s.createdAt?.toISOString(),
    updatedAt: s.updatedAt?.toISOString()
  }));
}

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="bg-[#1B1D1F] min-h-screen font-body selection:bg-red-600/30">
      {/* Hero Header */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#1B1D1F] -z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[160px] pointer-events-none -z-10"></div>
        
        <div className="container mx-auto px-6 text-center">
          <div className="h-1 w-20 bg-[#c92228] mx-auto mb-8 rounded-full"></div>
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight font-heading mb-6">
            Our <span className="text-[#c92228]">Services</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            We architect and deliver cutting-edge digital solutions tailored for modern business ecosystems.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-32 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const icon = getServiceIcon(service.iconName);
            return (
              <Link 
                key={service._id} 
                href={`/services/${service.slug}`}
                className="group p-10 bg-[#232527] border border-white/5 rounded-[2rem] shadow-2xl hover:border-red-600/20 transition-all hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-red-600/10 transition-colors duration-700"></div>
                
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl text-[#c92228] bg-red-600/10 border border-red-600/10 transition-transform group-hover:rotate-6">
                    {icon}
                  </div>
                  <div className="text-sm font-bold text-gray-700 font-mono tracking-tighter">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                <h2 className="text-2xl font-black text-white mb-4 font-heading tracking-tight">{service.title}</h2>
                <p className="text-gray-400 leading-relaxed mb-8 text-[15px] line-clamp-3 font-medium">{service.description}</p>
                
                <div className="flex items-center font-bold text-[#c92228] text-sm group-hover:gap-2 transition-all">
                  <span>Explore Service Details</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            );
          })}
        </div>
        
        {services.length === 0 && (
          <div className="text-center py-32 bg-white/5 rounded-[3rem] border border-dashed border-white/10 text-gray-500 font-bold tracking-widest text-sm">
            NO ACTIVE SERVICES DISCOVERED IN REGISTRY
          </div>
        )}
      </section>
    </div>
  );
}
