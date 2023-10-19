"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { IUser } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { Button, Col, Row, message } from "antd";
import { useAddFaqMutation } from "@/redux/api/faqApi";

const CreateFaqPage = () => {
  const [addFaq] = useAddFaqMutation();
  const router = useRouter();

  const onSubmit = async (values: any) => {
    try {
      const response = await addFaq(values).unwrap();
      if (response?._id) {
        router.push("/dashboard/admin/content/faqManagement");
        message.success("FAQ created successfully!");
      } else {
        message.error("Failed to create faq");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "Admin",
            link: "/dashboard/admin",
          },
          {
            label: "FAQ",
            link: "/dashboard/admin/content/faqManagement",
          },
          {
            label: "Add",
            link: "/dashboard/admin/content/faqManagement/create",
          },
        ]}
      />

      <div>
        <h1 className="text-center text-4xl font-bold leadi">Add FAQ</h1>
      </div>

      <div className="mt-10">
        <Form submitHandler={onSubmit}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                span={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  name="question"
                  type="text"
                  size="large"
                  label="Question"
                />
              </Col>
              <Col
                className="gutter-row"
                span={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  name="answer"
                  type="text"
                  size="large"
                  label="Answer"
                />
              </Col>
            </Row>
            <div className="flex justify-end">
              <Button htmlType="submit">Create</Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CreateFaqPage;
