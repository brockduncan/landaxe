import { Formik, Form, Field } from "formik";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const url =
  "https://landaxe.us10.list-manage.com/subscribe/post?u=bdf3c1068b9ffaebb7f3d4836&amp;id=313b1907d6";

export default function McFormBuyers() {
  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <Formik
          initialValues={{
            EMAIL: "",
          }}
          onSubmit={(values) =>
            subscribe({ EMAIL: values.EMAIL, "group[19401][1]": true })
          }
        >
          <Form>
            <div className="input-group flex">
              <Field
                type="email"
                name="EMAIL"
                id="mce-EMAIL"
                placeholder="your@email.com"
                required
                className="form-control"
              />
              <div className="input-group-append">
                <button type="submit" className="btn btn-primary">
                  Subscribe
                </button>
              </div>
            </div>
            <div>
              {status === "sending" && (
                <div style={{ color: "blue" }}>sending...</div>
              )}
              {status === "error" && (
                <div
                  style={{ color: "red" }}
                  dangerouslySetInnerHTML={{ __html: message }}
                />
              )}
              {status === "success" && (
                <div style={{ color: "green" }}>Subscribed !</div>
              )}
            </div>
          </Form>
        </Formik>
      )}
    />
  );
}
