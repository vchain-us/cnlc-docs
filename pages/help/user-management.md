---
title: Managing User Accounts
---

The *Users* page lets administrators create new users, change parameters for existing users, or delete them.

###### _Topics on this page..._

- [Creating New Users](/help/user-management#creating-new-users)

- [Managing Existing Users](/help/user-management#managing-existing-users)

## Creating New Users

To add a user to the system, you'll need their email address, desired user name, their role in the system and, optionally, their first and last name.

<help-image src="/alt_user_list.jpg" alt="User list" ></help-image>

### Role-based Permissions

Note that some limitations to user administration are imposed by your assign role.

- System admin - Full read-write access to all functions in the UI.
- Ledger administrator - Read-write access to user functions in the UI, but no access to admin functions.
- Auditor - Read-only permissions on Ledgers and their contents

### To Create a New User

1. Go to the *Users* page
2. Click the **Create user** button in the upper right.
3. Complete the form by filling in the following fields:
   - User name

   - email address

   - password

   - first name (optional)

   - last name (optional)
4. Select a role from the User role drop down menu.
5. Click the **Create user** button.

<help-image src="/alt_new_user.jpg" alt="New user" ></help-image>

You can change any of these parameters after creating a user, provided you have appropriate permissions.

## Managing Existing Users

You can quickly change or delete a user's account from the options popup menu by clicking the gear icon in the users row.

<help-image src="/alt_user_settings.jpg" alt="User settigns" ></help-image>

##### User Management Options

| Option              | Action                                                       |
| ------------------- | ------------------------------------------------------------ |
| Change role         | Assign a new access role to a user.                          |
| Change email        | Update user email.                                           |
| Regenerate Password | Algorithmically generate a new password.                     |
| Delete user         | Completely remove the user account from the system. This cannot be undone. |

All options open a simple text form that lets you enter changes.

<ui-prev-next class="mt-1" :prev="{ url: '/use-audit-reports', label: 'Audit Reports' }" :next="{ url: '/messages', label: 'Messages and Notifications' }"></ui-prev-next>
