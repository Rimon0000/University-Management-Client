import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { semesterStatusOptions } from "../../../constants/semester";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";
import { toast } from "sonner";
import { TResponse } from "../../../types/global";
import PHDatePicker from "../../../components/form/PHDatepicker";
import PHInput from "../../../components/form/PHInput";
import { useAddRegisteredSemesterMutation } from "../../../redux/features/admin/courseManagement.api";


const SemesterRegistration = () => {
    const [addSemester] = useAddRegisteredSemesterMutation()

    const {data: academicSemester} = useGetAllSemestersQuery([
        {name: "sort", value: "year"}
    ])
    const academicSemesterOptions = academicSemester?.data?.map((item) => ({
        value: item._id,
        label: `${item.name} ${item.year}`
    }))

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const semesterId = toast.loading("Creating....");

    const semesterData = {
      ...data,
      minCredit: Number(data.minCredit),
      maxCredit: Number(data.maxCredit)
    };
    console.log(semesterData);

    try {
      const res = (await addSemester(semesterData)) as TResponse<any>;
      console.log(res);
      if (res.error) {
        toast.error(res.error.data.message, { id: semesterId });
      } else {
        toast.error("Semester Registered Successfully!", { id: semesterId });
      }
    } catch (error) {
      toast.error("Something went wrong!", { id: semesterId });
    }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm
          onSubmit={onSubmit}
        >
          <PHSelect label="Academic Semester" name="academicSemester" options={academicSemesterOptions} />
          <PHSelect label="Status" name="status" options={semesterStatusOptions}/>
          <PHDatePicker label="Start Date" name="startDate"/>
          <PHDatePicker label="End Date" name="endDate"/>
          <PHInput type="text" label="Min. Credit" name="minCredit"/>
          <PHInput type="text" label="Max. Credit" name="maxCredit"/>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default SemesterRegistration;
