import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { ArrowLeft } from "lucide-react";
import crm from "@/public/CRM.png";

export const metadata = {
  title: "Building an Enterprise CRM & Operations Platform for Recharge+",
  description:
    "How we designed and delivered a full-stack operations platform — CRM, procurement, finance, AI assistant, and client portal — for a B2B wellness distributor in under 30 days.",
};

export default function RechargeCase() {
  return (
    <div className="min-h-screen bg-[--background] text-[--foreground]">
      <Header />

      <main className="pt-32 pb-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">

          {/* Back link */}
          <a
            href="/#latest"
            className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-[--muted-light] hover:text-[--foreground] transition-colors mb-16"
          >
            <ArrowLeft className="size-3" /> Back
          </a>

          {/* Article header */}
          <div className="max-w-3xl mb-16">
            <p
              className="text-[9px] tracking-[0.4em] uppercase mb-6"
              style={{ color: "var(--accent)" }}
            >
              Case Study · March 2026
            </p>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-[-0.01em] mb-8"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              How We Built an Enterprise CRM and Operations Platform for Recharge+ in Under a Month
            </h1>
            <p className="text-[11px] tracking-wide text-[--muted-light]">
              By Scalable Web Solutions
            </p>
          </div>

          {/* Hero image */}
          <div className="w-full aspect-16/9 overflow-hidden bg-[--border] mb-20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={crm.src}
              alt="Recharge+ CRM Platform"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article body */}
          <div className="max-w-2xl mx-auto">
            <Prose>

              <p>When most people hear "enterprise software," they think 6-month timelines, bloated agency retainers, and a finished product that barely resembles what was actually needed. Our client Recharge+ came to us with a different problem — they needed a fully custom, production-ready platform built fast, built right, and built around how their team actually works.</p>

              <p>This is how we did it.</p>

              <h2>The Brief</h2>

              <p>Recharge+ is a B2B wellness product distribution company. They source clinical-grade recovery products from manufacturers — red light therapy masks, vagus nerve stimulators, infrared saunas, cold plunge tubs — and distribute them to hotels, gyms, and corporate wellness programs across the country.</p>

              <p>When they came to us, their sales team was operating out of spreadsheets, their operations were disconnected from their finance, and they had no way to track the full lifecycle of a deal from first contact to fulfilled order. They needed a system that could manage all of it in one place.</p>

              <p>Their requirements were clear:</p>

              <ul>
                <li>A full CRM to manage leads, contacts, accounts, and opportunities through a custom sales pipeline</li>
                <li>A project management system for tracking installation jobs and client deliverables</li>
                <li>An order management and procurement layer connected to their manufacturer network</li>
                <li>Finance tools including invoicing, quotes, and payment tracking</li>
                <li>A built-in communication hub with email templates, campaign management, and team chat</li>
                <li>Google Calendar sync so the team never had to leave the platform to manage their schedule</li>
                <li>A client portal so customers could view project progress, shared documents, and outstanding invoices</li>
                <li>Role-based access so every team member only sees what they need to</li>
              </ul>

              <p>They also needed it live in under a month.</p>

              <h2>Why Custom and Not Off the Shelf</h2>

              <p>Before writing a single line of code we asked the obvious question — why not HubSpot, Salesforce, or Monday?</p>

              <p>The answer came down to three things.</p>

              <p>First, their workflow didn't fit neatly into any existing product. The connection between a CRM opportunity, a manufacturer purchase order, a hotel installation project, and a payout calculation is specific to how Recharge+ operates. Forcing that into a generic tool would have meant years of workarounds and missing data.</p>

              <p>Second, they needed full ownership of their data. Recharge+ works with sensitive business relationships, manufacturer agreements, and client financials. Having all of that locked inside a third-party SaaS platform with opaque data practices wasn't acceptable.</p>

              <p>Third, the long-term cost math was obvious. A SaaS tool at enterprise scale, heavily customized with integrations and add-ons, would cost more annually than building and maintaining a custom solution outright.</p>

              <h2>What We Built</h2>

              <p>We delivered a unified platform — a single application covering the entire business lifecycle from first lead to fulfilled order.</p>

              <p><strong>CRM</strong> — A fully custom sales pipeline built on their actual qualification stages. Leads flow in via manual entry or CSV import, get worked through a qualification process, and convert into contacts, accounts, and opportunities with a single click. Every record maintains a full activity timeline — calls, notes, emails, meetings, stage changes — so nothing gets lost between team members.</p>

              <p><strong>Pipeline Management</strong> — A Kanban-style opportunity board with drag-and-drop stage movement, weighted pipeline value calculations, close probability tracking, and both personal and company-wide views so leadership can see the full picture while reps stay focused on their own book.</p>

              <p><strong>Project Management</strong> — When a deal closes, an installation project is automatically linked to the account. The team can manage tasks, subtasks, issues, approvals, and collaboration threads directly inside the platform. Project health scores surface risk automatically so nothing slips through without someone noticing.</p>

              <p><strong>Procurement and Order Management</strong> — The procurement module connects directly to their manufacturer partner database. When a purchase order needs to go out, it's generated inside the platform, linked to the relevant project, and tracked from draft through delivery with ETA monitoring and supply chain health alerts.</p>

              <p><strong>Finance</strong> — Invoice creation, quote generation, payment logging, expense tracking, a product catalog, and a full ledger reconciliation panel. Everything links back to the CRM record it belongs to so finance and sales are always looking at the same data.</p>

              <p><strong>Communications</strong> — A drag-and-drop email template builder with variable substitution, a campaign management dashboard with open and click tracking powered by Resend, a team chat system with direct messages and announcement channels, and a support desk for managing client issues with SLA tracking.</p>

              <p><strong>Client Portal</strong> — Every account gets a unique portal link. Clients can log in, view their project stage, download shared documents, and pay outstanding invoices directly. No phone call required.</p>

              <p><strong>AI Assistant</strong> — A built-in AI concierge powered by Claude that can execute multi-step tasks across the platform on command — creating invoices, setting up campaigns, logging follow-up tasks — with a plan-and-approve step for anything sensitive.</p>

              <h2>How We Built It</h2>

              <p>Our client wanted this done in weeks, not quarters. That required us to make sharp decisions about architecture from day one and stick to them.</p>

              <p>We built the entire platform on a Next.js App Router foundation with Supabase as the database and real-time infrastructure. We used Drizzle ORM for type-safe database access across a schema that grew to cover more than 40 interconnected tables spanning CRM, finance, operations, inventory, communications, and agent infrastructure.</p>

              <p>Authentication and team management runs through Stack Auth, giving us multi-user support, organization scoping, and session management without building it from scratch. Email delivery and campaign infrastructure runs on Resend, with webhook ingestion for open and click tracking piped back into the platform's analytics layer. Invoicing and payment processes against Stripe, with a webhook handler that triggers downstream workflow automations when a payment is confirmed.</p>

              <p>Google Calendar sync uses OAuth 2.0 with encrypted token storage, giving every team member a live two-way calendar connection inside the platform. We also built a visual workflow automation engine from scratch — a node-based drag-and-drop builder where the team can create trigger-based automations across any module without writing code.</p>

              <p>Row Level Security is enforced across the entire Supabase database so every query is scoped to the correct organization at the database level, not just the application level. This means even a misconfigured API route cannot leak one client's data to another.</p>

              <h2>Security</h2>

              <p>Security was treated as a first-class requirement from the first day of development.</p>

              <p>Every user session is managed through Stack Auth with organization-level isolation enforced at the database layer through Supabase RLS policies. All Google OAuth tokens are encrypted at rest before storage. Every incoming webhook from Stripe is verified using HMAC signature validation before any payload is processed. Sensitive operations in the AI agent system require explicit user approval before execution.</p>

              <h2>The Timeline</h2>

              <p>We scoped, designed, built, and delivered the core platform in under 30 days. The sales team went live on schedule. The platform is now the operational backbone of the business.</p>

              <h2>What This Means for You</h2>

              <p>If you are running a business on spreadsheets, disconnected tools, or a SaaS product that almost fits your workflow but not quite — this is what a purpose-built alternative looks like.</p>

              <p>We build software that works the way your business works. Not the other way around.</p>

            </Prose>

            {/* CTA */}
            <div className="mt-20 pt-12 border-t border-[--border]">
              <p
                className="text-4xl md:text-5xl font-light text-[--foreground] mb-8 leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Ready to build yours?
              </p>
              <a
                href="mailto:contact@scalableweb.solutions"
                className="inline-flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-[--muted-light] hover:text-[--foreground] transition-colors border-b border-[--border] hover:border-[--accent] pb-1"
              >
                contact@scalableweb.solutions <ArrowLeft className="size-3 rotate-180" />
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose-sws">
      <style>{`
        .prose-sws p {
          font-size: 13px;
          line-height: 2;
          color: var(--muted-light);
          margin-bottom: 1.5rem;
          letter-spacing: 0.01em;
        }
        .prose-sws h2 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          font-weight: 300;
          color: var(--foreground);
          margin-top: 3.5rem;
          margin-bottom: 1.25rem;
          line-height: 1.1;
        }
        .prose-sws strong {
          color: var(--foreground);
          font-weight: 500;
        }
        .prose-sws ul {
          margin: 1.5rem 0;
          padding-left: 0;
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .prose-sws ul li {
          font-size: 13px;
          line-height: 1.8;
          color: var(--muted-light);
          padding-left: 1.25rem;
          position: relative;
          letter-spacing: 0.01em;
        }
        .prose-sws ul li::before {
          content: '—';
          position: absolute;
          left: 0;
          color: var(--accent);
          font-weight: 300;
        }
      `}</style>
      {children}
    </div>
  );
}
