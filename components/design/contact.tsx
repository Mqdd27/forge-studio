import { Link } from "../../i18n/navigation";
import { DesignText, DesignIcon, FilterGrid, InquiryForm } from "./primitives";

export function ContactDesign() {
  return (
    <main className="design-page design-contact flex-grow flex flex-col items-center w-full max-w-container-max mx-auto px-gutter-mobile md:px-gutter-desktop py-section-gap-sm md:py-section-gap-lg gap-gutter-desktop">
      <section className="w-full text-center max-w-3xl mx-auto mb-12">
        <h1 className="font-display-mobile md:font-display text-display-mobile md:text-display text-ink mb-6">
          <DesignText>{"Start a Project"}</DesignText>
        </h1>
        <p className="font-body-lg text-body-lg text-secondary">
          <DesignText>
            {
              "Let's initiate a discovery conversation to understand your business objectives and how our engineering capabilities can accelerate your growth."
            }
          </DesignText>
        </p>
      </section>
      <section className="w-full grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
        <div className="lg:col-span-8 bg-surface border border-border p-8 md:p-12 rounded-lg hover:border-primary-container transition-colors duration-300">
          <InquiryForm className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-2">
                <label className="font-label text-label text-ink uppercase" htmlFor="name">
                  <DesignText>{"Full Name"}</DesignText>
                </label>
                <input
                  className="w-full bg-transparent border border-border rounded p-3 font-body text-body text-ink focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all outline-none"
                  id="name"
                  name="name"
                  placeholder="Jane Doe"
                  required={true}
                  type="text"
                  autoComplete="name"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="font-label text-label text-ink uppercase" htmlFor="contact">
                  <DesignText>{"Email or WhatsApp"}</DesignText>
                </label>
                <input
                  className="w-full bg-transparent border border-border rounded p-3 font-body text-body text-ink focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all outline-none"
                  id="contact"
                  name="contact"
                  placeholder="jane@company.com"
                  required={true}
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="font-label text-label text-ink uppercase" htmlFor="company">
                <DesignText>{"Company Name (Optional)"}</DesignText>
              </label>
              <input
                className="w-full bg-transparent border border-border rounded p-3 font-body text-body text-ink focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all outline-none"
                id="company"
                name="company"
                placeholder="Acme Corp"
                type="text"
                autoComplete="organization"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="font-label text-label text-ink uppercase" htmlFor="project-type">
                <DesignText>{"Project Type"}</DesignText>
              </label>
              <div className="relative">
                <select
                  className="w-full bg-transparent border border-border rounded p-3 font-body text-body text-ink focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all outline-none appearance-none cursor-pointer"
                  id="project-type"
                  name="project-type"
                >
                  <option disabled={true} value="">
                    <DesignText>{"Select a category"}</DesignText>
                  </option>
                  <option value="custom-app">
                    <DesignText>{"Custom App Development"}</DesignText>
                  </option>
                  <option value="saas">
                    <DesignText>{"SaaS Platform"}</DesignText>
                  </option>
                  <option value="automation">
                    <DesignText>{"Process Automation"}</DesignText>
                  </option>
                  <option value="integration">
                    <DesignText>{"System Integration"}</DesignText>
                  </option>
                  <option value="maintenance">
                    <DesignText>{"Maintenance & Support"}</DesignText>
                  </option>
                  <option value="other">
                    <DesignText>{"Other"}</DesignText>
                  </option>
                </select>
                <DesignIcon name="expand_more" className=" absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-secondary" />
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="font-label text-label text-ink uppercase" htmlFor="description">
                <DesignText>{"Project Description"}</DesignText>
              </label>
              <textarea
                className="w-full bg-transparent border border-border rounded p-3 font-body text-body text-ink focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all outline-none resize-y"
                id="description"
                name="description"
                placeholder="Briefly describe your objectives, timelines, and any technical constraints..."
                required={true}
                rows={5}
              ></textarea>
            </div>
            <div className="pt-4">
              <button
                className="w-full md:w-auto bg-primary-container text-white px-8 py-4 rounded font-body font-semibold hover:bg-accent-dark transition-colors duration-200 flex items-center justify-center space-x-2"
                type="submit"
              >
                <span>
                  <DesignText>{"Prepare Email"}</DesignText>
                </span>
                <DesignIcon name="arrow_forward" className=" text-sm" />
              </button>
            </div>
          </InquiryForm>
        </div>
        <div className="lg:col-span-4 flex flex-col space-y-6">
          <div className="bg-surface-alt border border-border p-8 rounded-lg flex flex-col justify-center h-full">
            <DesignIcon name="schedule" className=" text-primary-container text-4xl mb-4" />
            <h3 className="font-h3 text-h3 text-ink mb-2">
              <DesignText>{"Response Expectation"}</DesignText>
            </h3>
            <p className="font-small text-small text-secondary mb-0">
              <DesignText>{"We review all serious inquiries thoroughly. Expect a response from an engineering lead within"}</DesignText>{" "}
              <strong>
                <DesignText>{"1-2 business days"}</DesignText>
              </strong>{" "}
              <DesignText>{"to schedule an initial consultation."}</DesignText>
            </p>
          </div>
          <div className="bg-surface border border-border p-8 rounded-lg">
            <h3 className="font-h3 text-h3 text-ink mb-4">
              <DesignText>{"Direct Channels"}</DesignText>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <DesignIcon name="mail" className=" text-secondary mt-1" />
                <div>
                  <p className="font-label text-label text-secondary uppercase mb-1">
                    <DesignText>{"Email"}</DesignText>
                  </p>
                  <a
                    className="font-body text-body text-ink hover:text-primary-container hover:underline transition-colors"
                    href="mailto:hello@forgestudio.dev"
                  >
                    <DesignText>{"hello@forgestudio.dev"}</DesignText>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
