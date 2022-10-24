import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import * as API from './api/API';

const App = () => {
  const [statusText, setStatusText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true);
    setStatusText('');
    API.sendEmail(values).then(res => {
      setStatusText(res.status);
      setLoading(false);
    });
  }

  const formik = useFormik({
    initialValues: {
      fromName: '',
      fromEmail: '',
      toName: '',
      toEmail: '',
      subject: '',
      body: '',
    },
    validationSchema: Yup.object({
      fromName: Yup.string().required('Required'),
      fromEmail: Yup.string().email('Invalid email address').required('Required'),
      toName: Yup.string().required('Required'),
      toEmail: Yup.string().email('Invalid email address').required('Required'),
      subject: Yup.string().required('Required'),
      body: Yup.string().required('Required'),
    }),
    onSubmit: values => {
      handleSubmit(values);
    },
  });

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={formik.handleSubmit} className="w-[32rem] my-8">
        <div className="flex flex-col sm:flex-row">
          <label htmlFor="fromName" className="w-[8rem] mt-2">From Name:</label>
          <div className="flex flex-col w-full">
            <input
              type="text"
              id="fromName"
              placeholder="Support Team"
              className={`form-control rounded-[.5rem] border ${formik.touched.fromName && formik.errors.fromName ? "border-danger" : "border-[#d9d9d9]"}`}
              value={formik.values.fromName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={loading}
            />
            {formik.touched.fromName && formik.errors.fromName &&
              <span className="text-[0.8rem] text-danger mt-1">{formik.errors.fromName}</span>
            }
          </div>
        </div>
        <div className="flex flex-col sm:flex-row mt-4">
          <label htmlFor="fromEmail" className="w-[8rem] mt-2">From Email:</label>
          <div className="flex flex-col w-full">
            <input
              type="email"
              id="fromEmail"
              placeholder="support@team.com"
              className={`form-control rounded-[.5rem] border ${formik.touched.fromEmail && formik.errors.fromEmail ? "border-danger" : "border-[#d9d9d9]"}`}
              value={formik.values.fromEmail}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={loading}
            />
            {formik.touched.fromEmail && formik.errors.fromEmail &&
              <span className="text-[0.8rem] text-danger mt-1">{formik.errors.fromEmail}</span>
            }
          </div>
        </div>
        <div className="flex flex-col sm:flex-row mt-4">
          <label htmlFor="toName" className="w-[8rem] mt-2">To Name:</label>
          <div className="flex flex-col w-full">
            <input
              type="text"
              id="toName"
              placeholder="John Doe"
              className={`form-control rounded-[.5rem] border ${formik.touched.toName && formik.errors.toName ? "border-danger" : "border-[#d9d9d9]"}`}
              value={formik.values.toName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={loading}
            />
            {formik.touched.toName && formik.errors.toName &&
              <span className="text-[0.8rem] text-danger mt-1">{formik.errors.toName}</span>
            }
          </div>
        </div>
        <div className="flex flex-col sm:flex-row mt-4">
          <label htmlFor="toEmail" className="w-[8rem] mt-2">To Email:</label>
          <div className="flex flex-col w-full">
            <input
              type="email"
              id="toEmail"
              placeholder="user@team.com"
              className={`form-control rounded-[.5rem] border ${formik.touched.toEmail && formik.errors.toEmail ? "border-danger" : "border-[#d9d9d9]"}`}
              value={formik.values.toEmail}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={loading}
            />
            {formik.touched.toEmail && formik.errors.toEmail &&
              <span className="text-[0.8rem] text-danger mt-1">{formik.errors.toEmail}</span>
            }
          </div>
        </div>
        <div className="flex flex-col sm:flex-row mt-4">
          <label htmlFor="subject" className="w-[8rem] mt-2">Subject:</label>
          <div className="flex flex-col w-full">
            <input
              type="text"
              id="subject"
              placeholder="Subjecct"
              className={`form-control rounded-[.5rem] border ${formik.touched.subject && formik.errors.subject ? "border-danger" : "border-[#d9d9d9]"}`}
              value={formik.values.subject}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={loading}
            />
            {formik.touched.subject && formik.errors.subject &&
              <span className="text-[0.8rem] text-danger mt-1">{formik.errors.subject}</span>
            }
          </div>
        </div>
        <div className="flex flex-col sm:flex-row mt-4">
          <label htmlFor="body" className="w-[8rem] mt-2">Body:</label>
          <div className="flex flex-col w-full">
            <textarea
              type="text"
              id="body"
              placeholder="Write email body"
              rows={3}
              className={`form-control rounded-[.5rem] border ${formik.touched.body && formik.errors.body ? "border-danger" : "border-[#d9d9d9]"}`}
              value={formik.values.body}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={loading}
            />
            {formik.touched.body && formik.errors.body &&
              <span className="text-[0.8rem] text-danger mt-1">{formik.errors.body}</span>
            }
          </div>
        </div>
        <div className="flex flex-row items-center gap-8 mt-8">
          <button
            type="submit"
            className="border border-[#ced4da] rounded-[.5rem] px-8 py-2"
          >Submit</button>
          <span>{statusText}</span>
        </div>
      </form>
    </div>
  );
}

export default App;
