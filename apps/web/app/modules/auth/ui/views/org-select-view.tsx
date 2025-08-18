import { OrganizationList } from "@clerk/nextjs";

export const OrgSelectView = () => {
  return (
    <div>
      <OrganizationList
        afterCreateOrganizationUrl="/"
        afterSelectOrganizationUrl="/"
        hidePersonal={true}
        skipInvitationScreen={true}
      />
    </div>
  );
};
