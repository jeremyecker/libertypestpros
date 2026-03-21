// RegionConfig type inlined to avoid hub.config circular deps
interface RegionConfig { shortName: string; name: string; }

export const SERVICES = [
  { name: 'Ant Control', slug: 'ant-control', icon: '🐜' },
  { name: 'Termite Treatment', slug: 'termite-treatment', icon: '🪵' },
  { name: 'Bed Bug Removal', slug: 'bed-bug-removal', icon: '🛏️' },
  { name: 'Rodent Control', slug: 'rodent-control', icon: '🐀' },
  { name: 'Cockroach Control', slug: 'cockroach-control', icon: '🪳' },
  { name: 'Mosquito Control', slug: 'mosquito-control', icon: '🦟' },
  { name: 'Spider Control', slug: 'spider-control', icon: '🕷️' },
  { name: 'Wasp & Hornet Removal', slug: 'wasp-hornet-removal', icon: '🐝' },
  { name: 'Flea & Tick Treatment', slug: 'flea-tick-treatment', icon: '🦗' },
  { name: 'Wildlife Removal', slug: 'wildlife-removal', icon: '🦝' },
  { name: 'Commercial Pest Control', slug: 'commercial-pest-control', icon: '🏢' },
] as const;

export type Service = typeof SERVICES[number];

export function getServiceDescription(service: Service, region: RegionConfig): string {
  const area = region.shortName || region.name;
  const descriptions: Record<string, string> = {
    'ant-control': `Keep ants out of your kitchen and away from your family. Effective, family-friendly ant treatments for ${area} homes. Same-day service available.`,
    'termite-treatment': `Protect your biggest investment. Expert termite inspections and treatment for ${area} homes. Licensed, insured technicians. Free estimates.`,
    'bed-bug-removal': `Help your family sleep easy again. Thorough bed bug removal that's gentle on your home and protective of your family. Serving all of ${area}.`,
    'rodent-control': `Mice and rats don't belong near your family. We remove them and seal entry points so they stay out for good. Licensed ${area} technicians.`,
    'cockroach-control': `A clean home deserves to stay that way. Complete cockroach elimination that protects your family and keeps roaches out for good. Licensed in ${area}.`,
    'mosquito-control': `Take back your backyard. Kid and pet-friendly mosquito treatments so your family can enjoy the outdoors all season long. Serving ${area} — call us.`,
    'spider-control': `No more surprises in the basement or garage. Thorough spider removal for your whole ${area} home. Licensed technicians, same-day service available.`,
    'wasp-hornet-removal': `Protect your kids and pets from stinging insects. We'll remove wasp and hornet nests from your yard, porch, and eaves — fast and professional.`,
    'flea-tick-treatment': `Protect your family and furry friends. Flea and tick control for ${area} homes and yards. Licensed technicians, same-day service available.`,
    'wildlife-removal': `Raccoons in the attic? Squirrels in the walls? Humane wildlife removal that protects your family and property. Licensed ${area} technicians — call us.`,
    'commercial-pest-control': `Customized pest management for local ${area} businesses. Discreet, reliable, and effective. Serving restaurants, hotels, offices, and more.`,
  };
  return descriptions[service.slug] ?? `Professional ${service.name.toLowerCase()} services for ${area} homes and businesses.`;
}
