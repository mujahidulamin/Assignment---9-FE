"use client";

import Loading from "@/app/loading";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import {
  useGetSingleUserQuery,
  useUpdateUserAdminMutation,
} from "@/redux/api/userApi";

import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";

type IDProps = {
  params: any;
};

const EditAdminPage = ({ params }: IDProps) => {
  const { id } = params;
  const router = useRouter();
  const { data, isLoading } = useGetSingleUserQuery(id);
  const [updateUserAdmin] = useUpdateUserAdminMutation();

  const onSubmit = async (values: any) => {
    try {
      const data = { id: id, data: values };
      const response = await updateUserAdmin(data).unwrap();
      if (response?._id) {
        router.push("/dashboard/super_admin/adminManagement");
        message.success("Admin updated successfully");
      } else {
        message.error("Failed to update admin");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  const defaultValues = {
    name: {
      firstName: data?.name?.firstName || "",
      lastName: data?.name?.lastName || "",
    },
    email: data?.email || "",
    mobileNumber: data?.mobileNumber || "",
    role: data?.role || "",
  };

  const roleOptions = [
    {
      label: "User",
      value: "user",
    },
    {
      label: "Admin",
      value: "admin",
    },
  ];

  if (isLoading) return <Loading />;
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "Super Admin",
            link: "/dashboard/super_admin",
          },
          {
            label: "Admins",
            link: "/dashboard/super_admin/adminManagement",
          },
          {
            label: "Update",
            link: `/dashboard/super_admin/adminManagement/edit/${data?.id}`,
          },
        ]}
      />

      <ActionBar title="Update Admin" />
      <div className="flex justify-center">
        <Form submitHandler={onSubmit} defaultValues={defaultValues}>
          <div
            className="md:mx-0 max-w-[500px] mx-auto mt-10"
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12} md={24} lg={24} style={{ margin: "5px 0" }}>
                <FormInput
                  name="name.firstName"
                  label="First name"
                  size="large"
                />
              </Col>
              <Col xs={24} sm={12} md={24} lg={24} style={{ margin: "5px 0" }}>
                <FormInput
                  name="name.lastName"
                  label="Last name"
                  size="large"
                />
              </Col>
              <Col xs={24} sm={12} md={24} lg={24} style={{ margin: "5px 0" }}>
                <FormInput
                  name="mobileNumber"
                  label="Mobile number"
                  size="large"
                />
              </Col>
              <Col xs={24} sm={12} md={24} lg={24} style={{ margin: "5px 0" }}>
                <FormSelectField
                  size="large"
                  name="role"
                  options={roleOptions}
                  label="Role"
                  placeholder="Select"
                />
              </Col>
              <Col xs={24} sm={12} md={24} lg={24} style={{ margin: "5px 0" }}>
                <FormInput name="email" label="Email" size="large" />
              </Col>
            </Row>
            <div className="flex justify-center mt-5">
              <Button htmlType="submit">Update</Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default EditAdminPage;
