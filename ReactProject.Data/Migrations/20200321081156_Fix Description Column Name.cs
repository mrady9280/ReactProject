using Microsoft.EntityFrameworkCore.Migrations;

namespace ReactProject.Data.Migrations
{
    public partial class FixDescriptionColumnName : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Decription",
                table: "Activities");

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Activities",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "Activities");

            migrationBuilder.AddColumn<string>(
                name: "Decription",
                table: "Activities",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
