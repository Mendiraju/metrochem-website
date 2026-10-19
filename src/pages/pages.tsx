import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { NavLink } from 'react-router-dom'
import { COMPANY, CONTACT_EMAIL, CONTACT_PHONE } from '../config/site'

type SectionCardProps = {
  title: string
  body: string
}

function SectionCard({ title, body }: SectionCardProps) {
  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  )
}

function EditableNotice() {
  return (
    <p className="editable-note" role="note">
      Proposed content below is provided as editable draft messaging and capability framing, subject to company
      confirmation.
    </p>
  )
}

export function HomePage() {
  return (
    <>
      <section className="hero-panel" aria-labelledby="hero-heading">
        <div>
          <p className="eyebrow">Pharmaceutical API Manufacturing</p>
          <h1 id="hero-heading">{COMPANY.tagline}</h1>
          <p className="lead">
            Metrochem API Private Limited is developing a quality-led manufacturing platform from J.N. Pharma
            City, Visakhapatnam.
          </p>
          <div className="actions">
            <NavLink className="button button-primary" to="/products-capabilities">
              Explore Capabilities
            </NavLink>
            <NavLink className="button button-secondary" to="/contact">
              Contact Metrochem
            </NavLink>
          </div>
        </div>
        <div className="hero-grid" aria-hidden="true">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>

      <section className="section" aria-labelledby="home-address-heading">
        <h2 id="home-address-heading">Manufacturing Facility</h2>
        <p>{COMPANY.facilityAddress}</p>
        <a className="inline-link" href={COMPANY.mapsUrl} target="_blank" rel="noreferrer">
          View location on Google Maps
        </a>
      </section>
    </>
  )
}

export function AboutPage() {
  return (
    <section className="section" aria-labelledby="about-heading">
      <h1 id="about-heading">About Us</h1>
      <EditableNotice />
      <div className="card-grid">
        <SectionCard
          title="Purpose"
          body="To support pharmaceutical partners with a manufacturing organization grounded in process discipline, quality systems, and transparent collaboration."
        />
        <SectionCard
          title="Operating Philosophy"
          body="Precision in chemistry and reliability in execution are positioned as core operating values for development and commercial manufacturing activities."
        />
        <SectionCard
          title="Facility Location"
          body={COMPANY.facilityAddress}
        />
      </div>
    </section>
  )
}

export function ProductsPage() {
  return (
    <section className="section" aria-labelledby="products-heading">
      <h1 id="products-heading">Products & Capabilities</h1>
      <EditableNotice />
      <article className="status-panel" aria-live="polite">
        <h2>Product portfolio information is being updated</h2>
        <p>
          Public product-level details are intentionally pending. Please share your requirement through the inquiry
          route so the team can respond with validated information.
        </p>
        <NavLink className="button button-primary" to="/contact">
          Submit Product Inquiry
        </NavLink>
      </article>
      <div className="card-grid">
        <SectionCard title="Capability Area (Draft)" body="API process development and technical transfer support." />
        <SectionCard title="Capability Area (Draft)" body="Scale-up planning under quality and process controls." />
        <SectionCard title="Capability Area (Draft)" body="Cross-functional documentation workflows for regulated delivery." />
      </div>
    </section>
  )
}

export function QualityPage() {
  return (
    <section className="section" aria-labelledby="quality-heading">
      <h1 id="quality-heading">Quality & Compliance</h1>
      <EditableNotice />
      <div className="card-grid">
        <SectionCard title="Quality Systems (Draft)" body="Structured quality management with documented procedures and lifecycle controls." />
        <SectionCard title="Documentation Integrity (Draft)" body="Traceable recording practices and review mechanisms to support quality oversight." />
        <SectionCard title="Compliance Readiness (Draft)" body="Operational planning aligned to evolving regulatory expectations and audit preparedness." />
      </div>
    </section>
  )
}

export function ManufacturingPage() {
  return (
    <section className="section" aria-labelledby="manufacturing-heading">
      <h1 id="manufacturing-heading">Manufacturing & Technology</h1>
      <EditableNotice />
      <div className="card-grid">
        <SectionCard title="Process Engineering (Draft)" body="Manufacturing planning centered on reproducibility, batch discipline, and quality checkpoints." />
        <SectionCard title="Technology Stack (Draft)" body="Balanced adoption of process equipment, data logging, and review controls." />
        <SectionCard title="Scale Strategy (Draft)" body="Stepwise pathway from process development toward commercial execution." />
      </div>
    </section>
  )
}

export function ResearchPage() {
  return (
    <section className="section" aria-labelledby="rnd-heading">
      <h1 id="rnd-heading">Research & Development</h1>
      <EditableNotice />
      <div className="card-grid">
        <SectionCard title="Route Evaluation (Draft)" body="Comparative route exploration focused on process robustness and quality outcomes." />
        <SectionCard title="Process Optimization (Draft)" body="Experimental planning for yield, impurity profile, and reproducibility goals." />
        <SectionCard title="Lifecycle Support (Draft)" body="R&D collaboration model supporting process improvement through product lifecycle phases." />
      </div>
    </section>
  )
}

export function SustainabilityPage() {
  return (
    <section className="section" aria-labelledby="sustainability-heading">
      <h1 id="sustainability-heading">Sustainability & EHS</h1>
      <EditableNotice />
      <div className="card-grid">
        <SectionCard title="Environmental Management (Draft)" body="Continuous monitoring and improvement approach for responsible manufacturing operations." />
        <SectionCard title="Health & Safety (Draft)" body="Risk-based workplace safety framework supported by training and operational controls." />
        <SectionCard title="Responsible Growth (Draft)" body="Long-term planning intended to align business continuity with environmental stewardship." />
      </div>
    </section>
  )
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type ContactFormState = {
  fullName: string
  company: string
  businessEmail: string
  phone: string
  country: string
  inquiryType: string
  subject: string
  message: string
}

const initialState: ContactFormState = {
  fullName: '',
  company: '',
  businessEmail: '',
  phone: '',
  country: '',
  inquiryType: '',
  subject: '',
  message: '',
}

export function ContactPage() {
  const [form, setForm] = useState<ContactFormState>(initialState)
  const [status, setStatus] = useState('')
  const errors = useMemo(() => {
    const validation: Partial<Record<keyof ContactFormState, string>> = {}

    if (!form.fullName.trim()) validation.fullName = 'Full name is required.'
    if (!form.company.trim()) validation.company = 'Company is required.'
    if (!form.businessEmail.trim()) validation.businessEmail = 'Business email is required.'
    if (form.businessEmail && !emailPattern.test(form.businessEmail)) validation.businessEmail = 'Enter a valid business email.'
    if (!form.country.trim()) validation.country = 'Country is required.'
    if (!form.inquiryType.trim()) validation.inquiryType = 'Please select an inquiry type.'
    if (!form.subject.trim()) validation.subject = 'Subject is required.'
    if (!form.message.trim()) validation.message = 'Message is required.'

    return validation
  }, [form])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (Object.keys(errors).length > 0) {
      setStatus('Please complete the required fields before sending your inquiry.')
      return
    }

    if (CONTACT_EMAIL === 'contact@your-domain.example') {
      setStatus('Contact form service is not configured yet. Please set CONTACT_EMAIL before publishing.')
      return
    }

    const body = `Full Name: ${form.fullName}\nCompany: ${form.company}\nBusiness Email: ${form.businessEmail}\nPhone: ${form.phone || 'Not provided'}\nCountry: ${form.country}\nInquiry Type: ${form.inquiryType}\n\n${form.message}`

    const mailtoUrl = `mailto:${encodeURIComponent(CONTACT_EMAIL)}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoUrl
    setStatus('Your email client was opened with your inquiry details. Please review and send from your mailbox.')
  }

  return (
    <section className="section" aria-labelledby="contact-heading">
      <h1 id="contact-heading">Contact Us</h1>
      <p>
        Contact placeholders are configurable and must be replaced with company-approved details before public
        launch.
      </p>
      <div className="contact-meta">
        <p>
          <strong>Configurable email placeholder:</strong> {CONTACT_EMAIL}
        </p>
        <p>
          <strong>Configurable phone placeholder:</strong> {CONTACT_PHONE}
        </p>
        <p>
          <strong>Facility address:</strong> {COMPANY.facilityAddress}
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <label>
          Full Name
          <input name="fullName" autoComplete="name" value={form.fullName} onChange={(event) => setForm({ ...form, fullName: event.target.value })} required aria-invalid={Boolean(errors.fullName)} />
          {errors.fullName && <span className="error-text">{errors.fullName}</span>}
        </label>

        <label>
          Company
          <input name="company" value={form.company} onChange={(event) => setForm({ ...form, company: event.target.value })} required aria-invalid={Boolean(errors.company)} />
          {errors.company && <span className="error-text">{errors.company}</span>}
        </label>

        <label>
          Business Email
          <input
            name="businessEmail"
            autoComplete="email"
            type="email"
            value={form.businessEmail}
            onChange={(event) => setForm({ ...form, businessEmail: event.target.value })}
            required
            aria-invalid={Boolean(errors.businessEmail)}
          />
          {errors.businessEmail && <span className="error-text">{errors.businessEmail}</span>}
        </label>

        <label>
          Phone (Optional)
          <input name="phone" autoComplete="tel" value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} />
        </label>

        <label>
          Country
          <input name="country" value={form.country} onChange={(event) => setForm({ ...form, country: event.target.value })} required aria-invalid={Boolean(errors.country)} />
          {errors.country && <span className="error-text">{errors.country}</span>}
        </label>

        <label>
          Inquiry Type
          <select
            name="inquiryType"
            value={form.inquiryType}
            onChange={(event) => setForm({ ...form, inquiryType: event.target.value })}
            required
            aria-invalid={Boolean(errors.inquiryType)}
          >
            <option value="">Select inquiry type</option>
            <option value="Business Collaboration">Business Collaboration</option>
            <option value="Product Inquiry">Product Inquiry</option>
            <option value="General Information">General Information</option>
          </select>
          {errors.inquiryType && <span className="error-text">{errors.inquiryType}</span>}
        </label>

        <label>
          Subject
          <input name="subject" value={form.subject} onChange={(event) => setForm({ ...form, subject: event.target.value })} required aria-invalid={Boolean(errors.subject)} />
          {errors.subject && <span className="error-text">{errors.subject}</span>}
        </label>

        <label>
          Message
          <textarea
            name="message"
            rows={6}
            value={form.message}
            onChange={(event) => setForm({ ...form, message: event.target.value })}
            required
            aria-invalid={Boolean(errors.message)}
          ></textarea>
          {errors.message && <span className="error-text">{errors.message}</span>}
        </label>

        <button className="button button-primary" type="submit">
          Start Email Inquiry
        </button>
        <p className="form-status" aria-live="polite">
          {status}
        </p>
      </form>
    </section>
  )
}

export function PrivacyPolicyPage() {
  return (
    <section className="section" aria-labelledby="privacy-heading">
      <h1 id="privacy-heading">Privacy Policy</h1>
      <p>
        This website may collect information submitted through the inquiry form, such as name, company, business
        email, phone (optional), country, and message details, solely for responding to business inquiries.
      </p>
      <p>
        No automated account creation, payment processing, or clinical/patient data collection is performed on
        this site. Content and policy text should be reviewed by company legal counsel before production launch.
      </p>
    </section>
  )
}

export function TermsPage() {
  return (
    <section className="section" aria-labelledby="terms-heading">
      <h1 id="terms-heading">Terms of Use</h1>
      <p>
        This website is provided for general informational and business communication purposes only. Product,
        capability, and compliance descriptions marked as draft are subject to company confirmation.
      </p>
      <p>
        Users should not rely on this website as regulatory, legal, or technical advice. Formal agreements and
        approved documentation govern any business engagement.
      </p>
    </section>
  )
}
