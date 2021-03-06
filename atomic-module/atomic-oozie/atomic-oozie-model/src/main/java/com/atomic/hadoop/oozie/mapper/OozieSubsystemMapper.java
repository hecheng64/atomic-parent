package com.atomic.hadoop.oozie.mapper;

import com.atomic.hadoop.oozie.domain.OozieSubsystem;

import java.util.List;

/**
 * 子系统 数据层
 * 
 * @author atomic
 * @date 2019-05-19
 */
public interface OozieSubsystemMapper {
	/**
     * 查询子系统信息
     * 
     * @param id 子系统ID
     * @return 子系统信息
     */
	OozieSubsystem selectOozieSubsystemById(Integer id);
	
	/**
     * 查询子系统列表
     * 
     * @param oozieSubsystem 子系统信息
     * @return 子系统集合
     */
	List<OozieSubsystem> selectOozieSubsystemList(OozieSubsystem oozieSubsystem);
	
	/**
     * 新增子系统
     * 
     * @param oozieSubsystem 子系统信息
     * @return 结果
     */
	int insertOozieSubsystem(OozieSubsystem oozieSubsystem);
	
	/**
     * 修改子系统
     * 
     * @param oozieSubsystem 子系统信息
     * @return 结果
     */
	int updateOozieSubsystem(OozieSubsystem oozieSubsystem);
	
	/**
     * 删除子系统
     * 
     * @param id 子系统ID
     * @return 结果
     */
	int deleteOozieSubsystemById(Integer id);
	
	/**
     * 批量删除子系统
     * 
     * @param ids 需要删除的数据ID
     * @return 结果
     */
	int deleteOozieSubsystemByIds(String[] ids);
	
}