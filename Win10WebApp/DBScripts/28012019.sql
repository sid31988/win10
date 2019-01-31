USE [win10master]
GO

/****** Object:  StoredProcedure [dbo].[spMergeAdditionalData]    Script Date: 28/01/2019 22:44:17 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[spMergeAdditionalData] 
	-- Add the parameters for the stored procedure here
	@AdditionalData [dbo].[AdditionalTable] ReadOnly
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	/*Insert Into AdditionalData
		select [Table], [Column], [Value], [ReferenceId],
		GETUTCDATE(), GETUTCDATE(),0 from @AdditionalData*/

		Merge AdditionalData as t
		using @AdditionalData as s
		on (s.id is not null and t.id = s.id)
		WHEN MATCHED THEN
		UPDATE SET 
		t.[Value] = s.[Value], t.UpdatedDate = GETUTCDATE(), t.IsDeleted = s.IsDeleted
		WHEN NOT MATCHED BY TARGET THEN
		Insert ([Table], [Column], [Value], [Refrenceid], [CreatedDate], [UpdatedDate], [IsDeleted])
		VALUES (s.[Table], s.[Column], s.[Value], s.ReferenceId, GETUTCDATE(), GETUTCDATE(), 0);

END
GO


-------------------------------------------------------------------------------------------------------------

USE [win10master]
GO
/****** Object:  StoredProcedure [dbo].[spUpdateAccounting]    Script Date: 28/01/2019 22:44:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[spUpdateAccounting]
	-- Add the parameters for the stored procedure here
	@Desc nvarchar(150),
	@Type nvarchar(50),
	@HSNSAC nvarchar(50),
	@GrpUnder nvarchar(50),
	@Block nvarchar(5),
	@Balance nvarchar(50),
	@BalancePost nvarchar(50),
	@NOF nvarchar(5),
	@IsDeleted bit,
	@Id int,
	@SubId int
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	update [Accountings]
	set [Desc] = @Desc,
	[Type] = @Type,
	HSNSAC = @HSNSAC,
	GrpUnder = @GrpUnder,
	[Block]=@Block,
	Balance = @Balance,
	BalancePost = @BalancePost,
	NOF = @NOF,
	IsDeleted = @IsDeleted,
	UpdatedDate = GETUTCDATE()
	where id = @Id and SubId = @SubId
END
